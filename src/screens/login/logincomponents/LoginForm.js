import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginForm = props => {
  const {onLoginPress, onSignUpPress} = props;
  const [username, setUsername] = useState('test@gmail.com');
  const [password, setPassword] = useState('12345678');

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={40}
        multiline={false}
        style={styles.usernameInput}
        onChangeText={username => {
          setUsername(username);
        }}
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={20}
        multiline={false}
        secureTextEntry={true}
        style={styles.usernameInput}
        onChangeText={password => {
          setPassword(password);
        }}
      />
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (
              username != undefined &&
              username.length > 2 &&
              password != undefined &&
              password.length > 2
            )
              onLoginPress(username, password);
            else alert(`Username or password can not be left empty`);
          }}>
          <Text style={styles.loginText}>{`Login`}</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.needAcc}>{`need an account ? `}</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => onSignUpPress()}>
            <Text style={styles.signupText}>{` Sign up`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 2,
    justifyContent: 'center',
  },
  usernameInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    color: 'white',
  },
  signupContainer: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
  },
  signupText: {color: 'blue'},
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 10,
    marginTop: '10%',
    alignContent: 'center',
  },
  loginText: {color: 'white', alignSelf: 'center'},
  signupButton: {
    paddingVertical: 10,
    paddingRight: 20,
  },
  needAcc: {paddingVertical: 10},
});

export default LoginForm;
