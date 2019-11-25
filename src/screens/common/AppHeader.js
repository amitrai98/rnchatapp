import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AppHeader = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  headerText: {
    alignSelf: 'center',
    color: 'white',
  },
});

export default AppHeader;
