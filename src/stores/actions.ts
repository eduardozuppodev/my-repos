/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionsType } from './types';

export const addFav = () => {
  return {
    type: ActionsType.ADD_FAV
  };
};

export const removeFav = () => {
  return {
    type: ActionsType.REMOVE_FAV
  };
};
