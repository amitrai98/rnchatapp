import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import InputBox from '../../common/InputBox';
import TouchableButton from '../../common/TouchableButton';

const SignUpForm = props => {
  const {onLoginPress, onSignUpPress} = props;
  const name = useFormInput('Amit');
  return (
    <View style={styles.container}>
      <InputBox
        label={'name'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
        value={name.value}
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
      />
      <InputBox
        label={'confirm password'}
        textInputStyle={styles.formInput}
        inputLabelStyle={styles.labelInput}
      />

      <TouchableButton
        buttonLabel={`SignUp`}
        textStyle={styles.signupText}
        buttonStyle={styles.signup}></TouchableButton>
      <View style={styles.loginText}>
        <Text>{`Already have an account ?  `}</Text>
        <TouchableButton
          buttonLabel={`Login`}
          textStyle={styles.textStyle}
          buttonStyle={styles.loginButton}></TouchableButton>
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
