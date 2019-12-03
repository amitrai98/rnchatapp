import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import Moment from 'react-moment';

const ChatMessage = props => {
  const {message} = props;
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent:
            message.messageType === 'sent' ? 'flex-end' : 'flex-start',
          marginRight: message.messageType === 'sent' ? 0 : 30,
          marginLeft: message.messageType === 'sent' ? 30 : 0,
        },
      ]}>
      <View
        style={
          message.messageType === 'sent'
            ? styles.chatSentContainer
            : styles.chatReceivedContainer
        }>
        <Text
          style={
            message.messageType === 'sent'
              ? styles.textSent
              : styles.textReceived
          }>{`${message.message}`}</Text>
        <Moment
          style={
            message.messageType === 'sent'
              ? styles.timeSent
              : styles.timeReceived
          }
          element={Text}
          fromNow>
          {moment(new Date(message.messageTime))}
        </Moment>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 2,
    flexDirection: 'row',
  },
  chatReceivedContainer: {
    alignContent: 'flex-start',
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(233,234,237)',
    borderWidth: 1,
  },
  chatSentContainer: {
    alignContent: 'flex-start',
    backgroundColor: 'rgb(166,184,200)',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(233,234,237)',
    borderWidth: 1,
  },
  textSent: {
    color: 'white',
    fontWeight: '400',
    fontSize: 17,
  },
  textReceived: {
    fontWeight: '400',
    fontSize: 17,
  },
  timeSent: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: 80,
    marginTop: 10,
    color: 'rgb(255,255,200)',
  },
  timeReceived: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: 80,
    marginTop: 10,
    color: 'rgb(169,168,168)',
  },
});

export default ChatMessage;
