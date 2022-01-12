import { ActionTypes } from "../constants/action-types";

const intialState = {
  lang: "eng",
};

export const LangReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LANG:
      return { lang: payload };
    default:
      return state;
  }
};