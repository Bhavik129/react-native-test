import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

import {images} from '../assets';

export function ImagePickerAvatar({uri, onPress}) {
  return (
    <View style={styles.imageBackground}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? {uri} : images.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 104,
    bottom: 5,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
