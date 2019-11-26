import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ChatMessage = props => {
  const {message} = props;
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent:
            message.messageType === 'sent' ? 'flex-start' : 'flex-end',
          marginRight: message.messageType === 'sent' ? 30 : 0,
          marginLeft: message.messageType === 'sent' ? 0 : 30,
        },
      ]}>
      <View style={styles.chatContainer}>
        <Text style={styles.text}>{`${message.message}`}</Text>
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
  chatContainer: {
    alignContent: 'flex-start',
  },
  text: {
    color: 'blue',
    fontWeight: '400',
    fontSize: 17,
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(233,234,237)',
    borderWidth: 1,
  },
});

export default ChatMessage;
