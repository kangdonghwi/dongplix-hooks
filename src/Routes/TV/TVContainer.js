import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { fetchAiringToday, fetchTvPopular, fetchTopRated } from '../../store/actions/index';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Poster from "../../Components/Poster";
import Background from "../../Components/BackgourndImg";

const Container = styled.div`
  padding: 20px;
`;

const TVContainer = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAiringToday());
    dispatch(fetchTvPopular());
    dispatch(fetchTopRated());
  },[]);

  const AiringTodayData = useSelector(state => state.AiringToday.movies, []) || [];
  const TvPopularData = useSelector(state => state.TvPopular.movies, []) || [];
  const TopRatedData = useSelector(state => state.topRated.movies, []) || [];

  return (
    <>
    <Helmet>
      <title>Movies | Dongflix</title>
    </Helmet>
      <Container>
        <Background />
          <Section title="AiringToday">
            { AiringTodayData.results && AiringTodayData.results.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
              />
            ))}
          </Section>
          <Section title="TvPopular">
            { TvPopularData.results && TvPopularData.results.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
              />
            ))}
          </Section>
          <Section title="TopRated">
            { TopRatedData.results && TopRatedData.results.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.name}
                rating={show.vote_average}
              />
            ))}
          </Section>
      </Container>
  </>
  )
}
export default TVContainer;
