import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ChatMessage = props => {
  const {messageObject} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{messageObject.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  headerText: {
    alignSelf: 'center',
  },
});

export default ChatMessage;
