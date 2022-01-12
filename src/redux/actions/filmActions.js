import { ActionTypes } from "../constants/action-types";

export const setList = (list) => {
  return {
    type: ActionTypes.SET_FILMS,
    payload: list,
  };
};


