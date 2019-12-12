import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const TouchableButton = props => {
  const {buttonLabel, onPress, buttonStyle, textStyle} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          if (onPress != undefined) onPress();
        }}>
        <Text style={textStyle}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {},
  buttonText: {
    alignSelf: 'center',
  },
});
