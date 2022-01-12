import { ActionTypes } from "../constants/action-types";

const intialState = {
  list: [],
};

export const filmsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FILMS:
      return { ...state, list: payload };
    default:
      return state;
  }
};
