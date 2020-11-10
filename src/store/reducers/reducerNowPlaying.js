import { FETCH_NOW_PLAYING } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_NOW_PLAYING:
          return {
            ...state,
            movies: action.data
          }
      default:
          return state;
  }
}