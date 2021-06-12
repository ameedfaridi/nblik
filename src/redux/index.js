import { createStore } from "redux";

//action
const ON_ADD = "ON_ADD";

//actionCreator
export const add_trip = (trip) => {
  return {
    type: ON_ADD,
    payload: trip,
  };
};

//initialState
const initialState = {
  trips: [],
};

//reducer
const addingTripReducer = (state = initialState, action) => {
  if (action.type === ON_ADD) {
    return {
      trips: [...state.trips, action.payload],
    };
  } else {
    return state;
  }
};

//store
export const store = createStore(addingTripReducer);
