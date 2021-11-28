/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionsType } from './types';

const INITIAL_STATE = {
  isFav: false,
  isNotFav: true
};

const reducers = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionsType.ADD_FAV:
      return {
        isFav: true,
        isNotFav: false
      };
    case ActionsType.REMOVE_FAV:
      return {
        isFav: false,
        isNotFav: true
      };
    default:
      return state;
  }
};

export default reducers;
