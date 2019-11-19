import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import InputBox from '../../common/InputBox';
import TouchableButton from '../../common/TouchableButton';
import {Base64} from 'js-base64';

const SignUpForm = props => {
  const {onLoginPress, onSignUpPress} = props;
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

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
      />
      <InputBox
        label={'phone'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
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
          if (isPasswordValid(password1, password2)) onSignUpPress();
          else alert(`Passwords do not match`);
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

function useFormInput(initialValue) {
  const {value, setValue} = useState('');
  function handleChange(updatedValue) {
    setValue(updatedValue);
  }
  return {value, onChangeText: handleChange};
}

function isPasswordValid(password1, password2) {
  if (password1 === password2 && password1.length > 7) return true;
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
