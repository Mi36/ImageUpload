import React from 'react';
import {View, Text, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

export default function PlaceListScreen() {
  console.log('aaaa');
  return (
    <View style={{flex: 1}}>
      <Text>PlaceListScreen</Text>
    </View>
  );
}

//here Navadata added to make navigation options to dynamic

PlaceListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    ),
  };
};
