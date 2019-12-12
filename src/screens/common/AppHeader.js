import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const AppHeader = props => {
  const {title, leftTitle} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftHeaderView}>
        {leftTitle != undefined ? <Text>{leftTitle}</Text> : null}
      </View>
      <View style={styles.centerHeaderView}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.rightHeaderView}>{rightView(props)}</View>
    </View>
  );
};

const rightView = props => {
  const {rightTitle, handleOnRightOptionPress} = props;
  return (
    <View style={{alignItems: 'center'}}>
      {rightTitle != undefined ? (
        <TouchableOpacity
          style={styles.rightButtonStyle}
          disabled={handleOnRightOptionPress != undefined ? false : true}
          onPress={() => {
            handleOnRightOptionPress != undefined
              ? handleOnRightOptionPress()
              : null;
          }}>
          <Text style={styles.rightOptionTextStyle}>{`${rightTitle}`}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 2,
    flexDirection: 'row',
  },
  headerText: {
    alignSelf: 'center',
    color: 'white',
    paddingVertical: 5,
  },
  leftHeaderView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  centerHeaderView: {flex: 1, alignItems: 'center'},
  rightHeaderView: {flex: 1, alignItems: 'flex-end'},
  rightOptionTextStyle: {
    marginHorizontal: 5,
    paddingVertical: 5,
    color: 'white',
  },
  rightButtonStyle: {},
});

export default AppHeader;
