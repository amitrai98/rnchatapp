import React from 'react';
import {Text, View} from 'react-native';

const LoginForm = props => {
  const {onLoginPress} = props;
  return (
    <View
      style={{
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 2,
      }}>
      <Text>{`onLoginPress`}</Text>
    </View>
  );
};

export default LoginForm;
