// Header.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Evillcons from 'react-native-vector-icons/EvilIcons';
import {images} from '../assets';

const Header = ({title, lefticon, righticon1, righticon2}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Evillcons name={lefticon} size={25} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Evillcons name={righticon1} size={30} style={styles.icon} />
        <View style={styles.profileImageContainer}>
          <Image
            source={images.user1}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginHorizontal: 5,
  },
  profileImageContainer: {
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5,
    width: 30,
    height: 30,
  },
  profileImage: {width: '80%', height: '80%'},
});

export default Header;
