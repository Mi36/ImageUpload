import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import Colors from '../constant/Colors';

export default function NewPlaceScreen(props) {
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
        />
        <Button title="Save Place" color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
};

const styles = StyleSheet.create({});
