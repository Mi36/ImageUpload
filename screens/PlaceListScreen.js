import React from 'react';
import {View, Text} from 'react-native';

export default function PlaceListScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>PlaceListScreen</Text>
    </View>
  );
}

PlaceListScreen.navigationOptions = {
  headerTitle: 'All Places',
};
