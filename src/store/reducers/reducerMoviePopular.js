import { FETCH_MOVIE_POPULAR } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_MOVIE_POPULAR:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}