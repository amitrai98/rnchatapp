import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {attemptLogin} from './LoginActions';
import LoginForm from './logincomponents/LoginForm';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';

type Props = {};

export class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <AnimatedLinearGradient
          customColors={presetColors.instagram}
          speed={4000}
        />
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.LoginReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptLogin: bindActionCreators(attemptLogin, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  formContainer: {backgroundColor: 'transparent'},
});
