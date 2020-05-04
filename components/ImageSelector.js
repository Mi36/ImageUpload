import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constant/Colors';
import ImagePicker from 'react-native-image-crop-picker';

const ImageSelector = props => {
  const [image, setImage] = useState();
  const pickImageHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      // hideBottomControls: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      props.onImageSelected(image.path);
    });
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No Image picked yet</Text>
        ) : (
          <Image style={styles.image} source={{uri: image}} />
        )}
      </View>
      <Button
        title="Pick image"
        color={Colors.primary}
        onPress={pickImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    // justifyContent:'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSelector;
