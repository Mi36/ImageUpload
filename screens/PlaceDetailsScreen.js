import React from 'react';
import {View, Text, Button} from 'react-native';

export default function PlaceDetailsScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>PlaceDetails Screen</Text>
      <Button title="pick" onPress={() => {}} color="red" />
    </View>
  );
}

PlaceDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};
