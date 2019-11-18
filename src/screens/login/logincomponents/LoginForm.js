import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Base64} from 'js-base64';

const LoginForm = props => {
  const {onLoginPress} = props;
  const [username, setUsername, password, setPassword] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={40}
        multiline={false}
        style={styles.usernameInput}
        onChangeText={username => {
          setUsername(Base64.encode(username));
        }}
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        maxLength={20}
        multiline={false}
        secureTextEntry={true}
        style={styles.usernameInput}
        // onChangeText={password => {
        //   setPassword(Base64.encode(password));
        // }}
      />
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            onLoginPress(username, password);
          }}>
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
    width: '80%',
    borderRadius: 10,
    marginTop: '10%',
    alignContent: 'center',
  },
  loginText: {color: 'white', alignSelf: 'center'},
});

export default LoginForm;
