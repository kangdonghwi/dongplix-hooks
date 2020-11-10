import { FETCH_AIRING_TODAY } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_AIRING_TODAY:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}