import React from 'react';
import PlaceNavigation from './navigation/PlacesNavigation';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placeReducer from './store/places-reducer';

const rootReducer = combineReducers({
  place: placeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlaceNavigation />
    </Provider>
  );
}

// import React, { Component } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   SafeAreaView,
//   ActivityIndicatorComponent,
//   TextInput,
//   TouchableOpacity
// } from 'react-native';

// const userInfo={username:'Admin', password:'123456'}

// export default class App extends Component {

// constructor(props){
//   super(props);
//   this.state={
//     username:'',
//     password:''
//   }
// }

//   render() {
//     return (
//       <SafeAreaView style={{flex:1,backgroundColor:'#E9EAED'}}>
//       <ScrollView style={{flex:1}}>
//         <View style={styles.welcome}>
//         <Text style={styles.header} >Login To my Application</Text>
//         </View>
//         <TextInput
//               placeholder="username"
//               style={styles.input}
//               onChangeText={(username)=>this.setState({username})}
//               value={this.state.username}
//               autoCapitalize="none"
//         />
//         <TextInput placeholder="password"
//                   style={styles.input}
//                    secureTextEntry
//                    onChangeText={(password)=>this.setState({password})}
//                    value={this.state.password}
//                    autoCapitalize="none"
//                    />
//       <View style={styles.btnContainer}>
//         <TouchableOpacity
//           style={styles.userButton}
//           onPress={()=>{
//             if(userInfo.username===this.state.username&&userInfo.password===this.state.password){
//               alert("Login Success")
//             }else{
//               alert("Not Success")
//             }

//           }}
//           >
//             <Text>Login</Text>
//           </TouchableOpacity>
//           </View>
//       </ScrollView>
//       </SafeAreaView>
//     );

//   }
// }
// const a=Dimensions.get('screen').height;

// const styles = StyleSheet.create({
//   welcome: {
//     marginTop:25,
//     height:a*.1,
//     textAlign: 'center',
//     alignItems:'center',
//     justifyContent:'center',
//     borderRadius:10,
//     marginHorizontal:20
//   },
//   header:{
//     fontSize:30,
//     fontStyle:'normal',
//     fontWeight:'bold',
//   },
//   input: {
//     backgroundColor: '#F0F9FF',
//     fontSize: 20,
//     marginVertical:25,
//    marginHorizontal:24,
//    height:40,
//    paddingLeft:15
//   },
//   btnContainer:{
//     alignItems:'center',
//     marginTop:35
//   },
//   userButton:{
//     height:50,
//     width:100,
//     backgroundColor:'#0F5BA7',
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius:10,
//   }

// });
