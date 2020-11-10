import { combineReducers } from 'redux';
import TopRatedReducer from './reducerTopRated';
import MoviePopularReducer from './reducerMoviePopular';
import TvPopularReducer from './reducerTvPopular';
import NowPlayingReducer from './reducerNowPlaying';
import AiringTodayReducer from './reducerAiringToday';
import UpcomingReducer from './reducerUpcoming';
import DetailReducer from './reducerDetail';

const rootReducer = combineReducers({
  topRated: TopRatedReducer,
  MoviePopular: MoviePopularReducer,
  TvPopular: TvPopularReducer,
  NowPlaying: NowPlayingReducer,
  Upcoming: UpcomingReducer,
  AiringToday: AiringTodayReducer,
  Detail: DetailReducer

});

export default rootReducer;