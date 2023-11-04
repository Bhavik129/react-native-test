import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const DisplayPicture = ({navigation, route}) => {
  const {uri} = route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.profileImage} />
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayPicture;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 5,
  },
  goBackButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
    marginVertical: 5,
    paddingVertical: 10,
  },
  goBackText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});
