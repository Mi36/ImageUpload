import React from 'react';
import {View, Text, Button} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function PlaceDetailsScreen() {
  const a = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
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
    <View style={{flex: 1}}>
      <Text>PlaceDetails Screen</Text>
      <Button title="pick" onPress={a} color="red" />
    </View>
  );
}

PlaceDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};
