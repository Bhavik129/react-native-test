import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const RoundImageWithBackground = ({ imageSource, size, backgroundColor }) => {
  return (
    <View style={[styles.container, { width: size, height: size, backgroundColor }]}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5
  },
  image: {
    width: '80%',
    height: '80%',
    tintColor:'white'
  },
});

export default RoundImageWithBackground;
