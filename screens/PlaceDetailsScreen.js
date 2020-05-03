import React from 'react';
import {View, Text} from 'react-native';

export default function PlaceDetailsScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>PlaceDetails Screen</Text>
    </View>
  );
}

PlaceDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};
