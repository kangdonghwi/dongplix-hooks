import { FETCH_UPCOMING } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_UPCOMING:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}