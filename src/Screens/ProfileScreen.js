import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerAvatar} from '../Components/ImagePickerAvatar';
import {ImagePickerModal} from '../Components/ImagePickerModal';

const ProfileScreen = ({navigation}) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, value => {
      console.log(value);
      if (!value.didCancel) {
        setPickerResponse(value);
      }
    });
    setVisible(false);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, value => {
      console.log(value);
      if (!value.didCancel) {
        setPickerResponse(value);
      }
    });
    setVisible(false);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse?.assets[0]?.uri;
  return (
    <View style={styles.container}>
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <TouchableOpacity
        disabled={pickerResponse?.assets[0]?.uri ? false : true}
        style={styles.nextButton}
        onPress={() => navigation.navigate('DisplayPicture', {uri})}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#0c0c0c'},
  nextButton: {
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 5,
    bottom: 30,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});
