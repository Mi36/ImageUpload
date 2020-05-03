// const ADD_PLACE = 'ADD_PLACE';

// export const addPlace = title => {
//   return { type: ADD_PLACE, placeData: {title: title} };
// };

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = title => {
  return {type: ADD_PLACE, placeData: {title: title}};
};
//no unwanted commas here keep in mind
