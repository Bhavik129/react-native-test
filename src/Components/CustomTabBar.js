import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import {images} from '../assets';
const CustomTabBar = props => {
  return (
    <View style={style.container}>
      <Image
        source={images.tabBg}
        resizeMode="cover"
        style={style.backGroundImage}
      />
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  backGroundImage: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 48,
    shadowColor: '#E5E5E5',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
