import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

export default function PlaceListScreen() {
  return (
    <View style={{flex: 1}}>
      <Text>PlaceListScreen</Text>
      <Icon name="rowing" />

      <Icon name="g-translate" color="#00aced" />

      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      />

      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
    </View>
  );
}

PlaceListScreen.navigationOptions = {
  headerTitle: 'All Places',
};
