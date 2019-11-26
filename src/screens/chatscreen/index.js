import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pullChats} from './ChatscreenActions';
import AppHeader from '../common/AppHeader';
import ChatMessage from './components/ChatMessage';
import chat from './components/chat';
import images from '../../assets/images';
import ChatInputBox from './components/ChatInputBox';
import {getMessageObject} from './components/ChatHelper';
type Props = {};

export class ChatScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      messageData: chat,
    };
  }
  handleSendMessage(message, senderId, receiverId) {
    let data = getMessageObject(message, senderId, receiverId);
    this.setState({messageData: [...this.state.messageData, data]}, () => {
      this.flatListRef.scrollToIndex({
        animated: true,
        index: this.state.messageData.length - 2,
        viewPosition: 0.5,
      });
    });
  }
  getItemLayout = (data, index) => ({length: 50, offset: 50 * index, index});
  render() {
    const {chatData} = this.props.navigation.state.params;
    const {messageData} = this.state;
    return (
      <View style={styles.container}>
        <AppHeader title={`${chatData.name}`} />
        <ImageBackground
          source={images.bg_messages}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.chatStyle}>
            <FlatList
              ref={ref => {
                this.flatListRef = ref;
              }}
              getItemLayout={this.getItemLayout}
              initialScrollIndex={messageData.length - 1}
              initialNumToRender={2}
              onScrollToIndexFailed={error => {
                console.log(`error in scroll ${error}`);
              }}
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
              onSendPress={(message, senderId, receiverId) => {
                this.handleSendMessage(message, senderId, receiverId);
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.ChatReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pullChats: bindActionCreators(pullChats, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
const styles = StyleSheet.create({
  container: {flex: 1},
  chatStyle: {flex: 1, marginTop: 10, marginBottom: 100},
  chatBox: {position: 'absolute', bottom: 0, left: 0, right: 0},
});
