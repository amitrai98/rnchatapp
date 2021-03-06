import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const ChatInputBox = props => {
  const {onSendPress} = props;
  const [message, setMessage] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        ref={input => {
          textInput = input;
        }}
        onChangeText={value => {
          setMessage(value);
        }}
        style={styles.headerText}></TextInput>
      <TouchableOpacity
        disabled={message != undefined && message.length > 0 ? false : true}
        onPress={() => {
          if (onSendPress != undefined) onSendPress(message);
          setMessage(message);
          textInput.clear();
          setMessage('');
        }}
        style={[
          styles.sendButton,
          {
            backgroundColor:
              message != undefined && message.length > 0
                ? 'rgb(57,130,224)'
                : 'rgb(169,169,169)',
          },
        ]}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 40,
  },
  headerText: {
    alignSelf: 'center',
    flex: 1,
    alignSelf: 'center',
    borderColor: 'rgb(234,233,237)',
    borderWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 3,
  },
  sendButton: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(57,130,224)',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    marginRight: 4,
    marginBottom: 10,
  },
  sendButtonText: {color: 'white'},
});

export default ChatInputBox;
