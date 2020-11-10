import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { fetchNowPlaying, fetchMoviePopular, fetchUpcoming } from '../../store/actions/index';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Poster from "../../Components/Poster";
import Background from "../../Components/BackgourndImg";

const Container = styled.div`
  padding: 20px;
`;

const HomeContainer = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchMoviePopular());
    dispatch(fetchUpcoming());
  },[]);

  const UpcomingData = useSelector(state => state.Upcoming.movies, []) || [];
  const MoviePopularData = useSelector(state => state.MoviePopular.movies, []) || [];
  const NowPlayingData = useSelector(state => state.NowPlaying.movies, []) || [];

  return (
    <>
    <Helmet>
      <title>Movies | Dongflix</title>
    </Helmet>
      <Container>
        <Background />
          <Section title="Upcoming">
            { UpcomingData.results && UpcomingData.results.map(movie => (
              <Poster
                key={movie.id}
                props={movie}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
          <Section title="Popular">
            { MoviePopularData.results && MoviePopularData.results.map(movie => (
              <Poster
                key={movie.id}
                props={movie}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
          <Section title="NowPlaying">
            { NowPlayingData.results && NowPlayingData.results.map(movie => (
              <Poster
                key={movie.id}
                props={movie}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                isMovie={true}
              />
            ))}
          </Section>
      </Container>
  </>
  )
}
export default HomeContainer;
