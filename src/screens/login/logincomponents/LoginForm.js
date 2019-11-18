import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginForm = props => {
  const {onLoginPress} = props;
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={16}
        multiline={false}
        style={styles.usernameInput}
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={16}
        multiline={false}
        secureTextEntry={true}
        style={styles.usernameInput}
      />
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>{`Login`}</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text>{`need an account ? `}</Text>
          <TouchableOpacity>
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
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
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
    width: '80%',
    borderRadius: 10,
    marginTop: '10%',
    alignContent: 'center',
  },
  loginText: {color: 'white', alignSelf: 'center'},
});

export default LoginForm;
