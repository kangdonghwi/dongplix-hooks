import axios from 'axios';

export const FETCH_MOVIE_POPULAR = 'FETCH_MOVIE_POPULAR';
export const FETCH_TV_POPULAR = 'FETCH_TV_POPULAR';
export const FETCH_NOW_PLAYING = 'FETCH_NOW_PLAYING';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_UPCOMING = 'FETCH_UPCOMING';
export const FETCH_AIRING_TODAY = 'FETCH_AIRING_TODAY';
export const FETCH_DETAIL = 'FETCH_DETAIL';

const API_KEY = '07b6a7d0f89d83629f77364a2c6521ef';
const BASE_URL = `https://api.themoviedb.org/3`

export const fetchDetailData = (data) => {
  return {
      type: FETCH_DETAIL,
      data
  }
}

export const fetchDetail = (data) => {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/tv/${data.id}?api_key=${API_KEY}&language=en-US`)
          .then(response => {
              dispatch(fetchDetailData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

export const fetchAiringTodayData = (data) => {
  return {
      type: FETCH_AIRING_TODAY,
      data
  }
}

export const fetchAiringToday = () => {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US`)
          .then(response => {
              dispatch(fetchAiringTodayData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}


export const fetchUpcomingData = (data) => {
  return {
      type: FETCH_UPCOMING,
      data
  }
}

export const fetchUpcoming = () => {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`)
          .then(response => {
              dispatch(fetchUpcomingData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

export const fetchTvPopularData = (data) => {
  return {
      type: FETCH_TV_POPULAR,
      data
  }
}

export const fetchTvPopular = () => {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`)
          .then(response => {
              dispatch(fetchTvPopularData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}


export const fetchMoviePopularData = (data) => {
  return {
      type: FETCH_MOVIE_POPULAR,
      data
  }
}

export const fetchMoviePopular = () => {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`)
          .then(response => {
              dispatch(fetchMoviePopularData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

export const fetchNowPlayingData = (data) => {
  return {
      type: FETCH_NOW_PLAYING,
      data
  }
}

export function fetchNowPlaying() {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        dispatch(fetchNowPlayingData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}



export const fetchTopData = (data) => {
  return {
      type: FETCH_TOP_RATED,
      data
  }
}

export function fetchTopRated() {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        dispatch(fetchTopData(response.data))
      })
      .catch(error => {
          throw(error);
      })
  }
}
