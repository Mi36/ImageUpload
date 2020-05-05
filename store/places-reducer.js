import {ADD_PLACE, SET_PLACE} from './places-action';

import Place from '../models/places';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        places: action.places.map(
          p1 => new Place(p1.id.toString(), p1.title, p1.imageUri),
        ),
      };

    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
