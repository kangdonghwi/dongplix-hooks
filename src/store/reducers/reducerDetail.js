import { FETCH_DETAIL } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_DETAIL:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}