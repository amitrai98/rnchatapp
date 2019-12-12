import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const InputBox = props => {
  const {
    textInputStyle,
    onChangeText,
    label,
    inputLabelStyle,
    secureTextEntry,
    keyboardType,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={inputLabelStyle}>{`${label}`}</Text>
      <TextInput
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={40}
        multiline={false}
        style={textInputStyle}
        secureTextEntry={secureTextEntry}
        onChangeText={text => {
          if (onChangeText != undefined) onChangeText(text);
        }}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
