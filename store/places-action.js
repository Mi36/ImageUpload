// const ADD_PLACE = 'ADD_PLACE';

// export const addPlace = title => {
//   return { type: ADD_PLACE, placeData: {title: title} };
// };
import {insertPlace, fetchPlace} from '../helpers/db';
//import RNFS from 'react-native-fs';
var RNFS = require('react-native-fs');

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = RNFS.DocumentDirectoryPath + fileName;

    try {
      RNFS.writeFile(newPath, image)
        .then(success => {
          console.log('FILE WRITTEN!');
        })
        .catch(err => {
          console.log(err.message);
        });

      const dbResult = await insertPlace(
        title,
        image,
        'Dummy address',
        15.6,
        12.3,
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {id: dbResult.insertId, title: title, image: image},
      });
    } catch (err) {
      throw err;
    }
  };
};

export const loadPlace = () => {
  return async dispatch => {
    try {
      const dbResult2 = await fetchPlace();
      console.log(dbResult2);

      var len = dbResult2.rows.length;
      const products = [];
      for (let i = 0; i < len; i++) {
        let row = dbResult2.rows.item(i);
        //  console.log(row);
        // console.log(`Prod ID: ${row.prodId}, Prod Name: ${row.prodName}`);
        const {title, imageUri, lat, lng, id, address} = row;
        // var products = [];
        products.push({
          address,
          id,
          imageUri,
          lat,
          lng,
          title,
        });
      }
      console.log(products);

      dispatch({type: SET_PLACE, places: products});
    } catch (err) {
      throw err;
    }
  };
};

// export const addPlace = (title, image) => {
//   return {type: ADD_PLACE, placeData: {title: title, image: image}};
// };
//no unwanted commas here keep in mind
