import React, {useEffect} from 'react';
import {View, Text, Platform, FlatList, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placeActions from '../store/places-action';
import {useDispatch} from 'react-redux';

export default function PlaceListScreen(props) {
  const places = useSelector(state => state.place.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(placeActions.loadPlace());
  }, [dispatch]);
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          // this is the way it stored in our model
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetails', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
}

//here Navadata added to make navigation options to dynamic

PlaceListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
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
