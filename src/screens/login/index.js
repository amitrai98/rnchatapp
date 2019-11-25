import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {attemptLogin} from './LoginActions';
import LoginForm from './logincomponents/LoginForm';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';
import Loader from '../common/Loader';

type Props = {};

export class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: 'amit.rai@gmail.com',
      password: 'amit.amit',
    };
  }

  componentDidUpdate(prevProps) {
    const {isFetching, error, data, success, failure} = this.props;
    if (prevProps.isFetching !== isFetching && !isFetching) {
      if (success) this.props.navigation.navigate('home', {loginData: data});
      else if (failure) alert(`login error ${error}`);
    }
  }

  attemptLogin(username, password) {
    this.props.attemptLogin({
      username: this.state.username,
      password: this.state.password,
    });
  }
  openSignUpPage() {
    this.props.navigation.navigate('signup');
  }
  render() {
    const {isFetching} = this.props;
    return (
      <View style={styles.container}>
        <AnimatedLinearGradient
          customColors={presetColors.instagram}
          speed={4000}
        />
        <Loader loading={isFetching} />
        <View style={styles.formContainer}>
          <LoginForm
            onSignUpPress={() => this.openSignUpPage()}
            onLoginPress={(username, password) =>
              this.attemptLogin(username, password)
            }
          />
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
