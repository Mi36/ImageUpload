import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import Colors from '../constant/Colors';
import {useDispatch} from 'react-redux';
import * as placeActions from '../store/places-action';
import {useSelector} from 'react-redux';

export default function NewPlaceScreen(props) {
  const places = useSelector(state => state.place.places);
  console.log('places', places);
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState(null);
  const titleValueHandler = text => {
    // we can add validation here
    //text is passed to there by default
    // setTitleValue(event.nativeEvent.text);
    setTitleValue(text);
  };
  const saveItemHandler = () => {
    dispatch(placeActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={{flex: 1, margin: 30}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 15}}>
          Title
        </Text>
        <TextInput
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            marginBottom: 12,
            height: '29%',
            paddingLeft: 9,
          }}
          onChangeText={titleValueHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={saveItemHandler}
        />
      </View>
    </ScrollView>
  );
}
NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
};
