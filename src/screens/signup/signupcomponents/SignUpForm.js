import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import InputBox from '../../common/InputBox';
import TouchableButton from '../../common/TouchableButton';
import {Base64} from 'js-base64';
import {isValidSignupInput} from './SignupHelper';

const SignUpForm = props => {
  const {onLoginPress, onSignUpPress} = props;
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function clearData() {
    setName('');
    setPassword1('');
    setPassword2('');
  }

  return (
    <View style={styles.container}>
      <InputBox
        label={'name'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        onChangeText={text => setName(text)}
        value={name}
      />
      <InputBox
        label={'email'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        onChangeText={text => setEmail(text)}
      />
      <InputBox
        label={'phone'}
        keyboardType={'number-pad'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        onChangeText={text => setPhone(text)}
      />
      <InputBox
        label={'password'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        secureTextEntry={true}
        onChangeText={text => setPassword1(text)}
        value={password1}
      />
      <InputBox
        label={'confirm password'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        secureTextEntry={true}
        onChangeText={text => setPassword2(text)}
        value={password2}
      />

      <TouchableButton
        onPress={() => {
          let status = isValidSignupInput(
            name,
            email,
            phone,
            password1,
            password2,
          );
          if (status.isValidInput)
            onSignUpPress({
              name: name,
              email: email,
              phone: phone,
              password: password1,
            });
          else alert(`${status.message}`);
        }}
        buttonLabel={`SignUp`}
        textStyle={styles.signupText}
        buttonStyle={styles.signup}
      />
      <View style={styles.loginText}>
        <Text>{`Already have an account ?  `}</Text>
        <TouchableButton
          onPress={() => {
            clearData();
            onLoginPress();
          }}
          buttonLabel={`Login`}
          textStyle={styles.textStyle}
          buttonStyle={styles.loginButton}
        />
      </View>
    </View>
  );
};

export default SignUpForm;

function isPasswordValid(password1, password2) {
  if (password1 === password2 && password1.length > 6) return true;
  else return false;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  labelInput: {
    color: 'white',
  },
  formInput: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
  },
  input: {
    borderWidth: 0,
  },
  signup: {
    marginTop: 20,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  signupText: {
    alignSelf: 'center',
  },
  loginText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
    alignContent: 'center',
  },
  textStyle: {
    color: 'blue',
    alignSelf: 'center',
  },
});
