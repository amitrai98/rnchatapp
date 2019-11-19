import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SignUpForm = props => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={40}
        multiline={false}
        style={styles.username}
      />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  username: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
