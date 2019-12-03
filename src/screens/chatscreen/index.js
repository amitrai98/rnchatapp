import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pullChats, sendChatMessage} from './ChatscreenActions';
import AppHeader from '../common/AppHeader';
import ChatMessage from './components/ChatMessage';
import images from '../../assets/images';
import ChatInputBox from './components/ChatInputBox';
import {
  MESSAGE_SENT,
  MESSAGE_UNSEEN,
  getChatMessage,
} from './components/ChatHelper';
import ApiHandler from '../../networking/ApiHandler';

let chatListener = null;
export class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData: [],
      loginData: this.props.navigation.getParam('loginData'),
      chatData: this.props.navigation.getParam('chatData'),
    };
  }

  componentWillUnmount() {
    if (chatListener != null) chatListener();
  }

  componentDidMount() {
    const {loginData, chatData, messageData} = this.state;

    this.props.pullChats({
      messageFrom: loginData.user.phoneNumber,
      messageTo: chatData.phoneNumbers[0].number,
    });
    chatListener = ApiHandler.getInstance()
      .startListeningForMessages(
        {
          messageFrom: loginData.user.phoneNumber,
          messageTo: chatData.phoneNumbers[0].number,
        },
        message => {
          messageData.splice(0, messageData.length);
          for (var key in message.data) {
            if (message.data.hasOwnProperty(key)) {
              var val = message.data[key];
              messageData.push(val);
            }
          }
          messageData.reverse();
          setTimeout(() => {
            this.setState(messageData, () => {
              this.flatListRef.scrollToEnd({
                animated: true,
              });
            });
          }, 200);
        },
      )
      .then(chatListenerInstance => {
        chatListener = chatListenerInstance;
      });
  }

  componentDidUpdate(prevProps) {
    const {
      isFetching,
      error,
      data,
      success,
      failure,
      chatData,
      chatSentSuccess,
      chatSentFailure,
      chatSentError,
    } = this.props;
    if (prevProps.isFetching != isFetching && !isFetching) {
      if (success) {
        const {messageData} = this.state;
        messageData.splice(0, messageData.length);
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            messageData.push(val);
          }
        }
        messageData.reverse();
        this.setState(messageData);
      }
    }
  }
  handleSendMessage(message) {
    const {loginData, chatData} = this.state;
    let data = getChatMessage(
      message,
      chatData.phoneNumbers[0].number,
      loginData.user.phoneNumber,
      MESSAGE_SENT,
      MESSAGE_UNSEEN,
    );
    this.props.sendChatMessage({chatData: data});
    this.setState({messageData: [...this.state.messageData, data]}, () => {
      this.flatListRef.scrollToEnd({
        animated: true,
      });
    });
  }
  getItemLayout = (data, index) => ({length: 10, offset: 100 * index, index});
  render() {
    const {chatData} = this.props.navigation.state.params;
    const {messageData} = this.state;
    return (
      <View style={styles.container}>
        <AppHeader
          title={`${
            chatData.givenName != undefined ? chatData.givenName : ''
          } ${chatData.familyName != undefined ? chatData.familyName : ''}`}
        />
        <ImageBackground
          source={images.bg_messages}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.chatStyle}>
            <FlatList
              ref={ref => {
                this.flatListRef = ref;
              }}
              onScrollToIndexFailed={error => {}}
              extraData={messageData.length}
              data={messageData}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({item, index}) => {
                return <ChatMessage message={item} />;
              }}
            />
          </View>
          <View style={styles.chatBox}>
            <ChatInputBox
              onSendPress={message => {
                this.handleSendMessage(message);
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    isFetching,
    error,
    data,
    success,
    failure,
    chatData,
    chatSentSuccess,
    chatSentFailure,
    chatSentError,
  } = state.ChatReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
    chatData,
    chatSentSuccess,
    chatSentFailure,
    chatSentError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pullChats: bindActionCreators(pullChats, dispatch),
    sendChatMessage: bindActionCreators(sendChatMessage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
const styles = StyleSheet.create({
  container: {flex: 1},
  chatStyle: {flex: 1, marginTop: 10, marginBottom: 100},
  chatBox: {position: 'absolute', bottom: 0, left: 0, right: 0},
});
