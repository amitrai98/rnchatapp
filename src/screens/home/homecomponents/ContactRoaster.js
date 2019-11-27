import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'react-moment';
import moment from 'moment';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';

const ContactRoaster = props => {
  const {user, openChatScreen} = props;
  return (
    <TouchableOpacity onPress={() => openChatScreen(user)}>
      <View style={styles.container}>
        <View style={styles.holder}>
          <View style={styles.roasterIcon}>
            <TouchableOpacity>
              <FastImage
                style={styles.userIcon}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.namePreview}>
            <Text numberOfLines={1} style={styles.headerText}>
              {`${user.givenName} `}
            </Text>
            <Text numberOfLines={1} style={styles.headerText}>
              message
            </Text>
          </View>
          <Moment style={styles.timeText} element={Text} fromNow>
            {moment.now()}
          </Moment>
        </View>
        <View style={{height: 1}}>
          <AnimatedLinearGradient
            customColors={presetColors.sunrise}
            speed={1000}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
  },
  holder: {flex: 1, backgroundColor: 'white', flexDirection: 'row'},
  headerText: {
    margin: 2,
  },
  roasterIcon: {flex: 1, justifyContent: 'center', padding: 5},
  userIcon: {width: 60, height: 60, borderRadius: 30, alignItems: 'center'},
  namePreview: {
    flex: 2,
    padding: 10,
    justifyContent: 'flex-start',
    justifyContent: 'center',
  },
  timeText: {flex: 2, alignSelf: 'center', padding: 10},
});

export default ContactRoaster;
