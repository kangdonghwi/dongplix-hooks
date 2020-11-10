import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";


const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;


const SearchContianer = () => {
  const [search, setSearch] = useState('');
  const [movieLists, setMovieLists] = useState([]);

  const API_KEY = '07b6a7d0f89d83629f77364a2c6521ef';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en-US`;

  let data = [];

  const fetch = async () => {
    const response = await axios.get(url);
    data = response.data.results || [];
    setMovieLists(data);
  }

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== "") {
      fetch(setMovieLists());
    }
  };

  return(
    <Container>
    <Helmet>
      <title>Search | Dongfilx</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Moives or TV Shows..."
        value={search}
        onChange={onChange}
      ></Input>
    </Form>
      <>
        <Section title="Movie Results">
          {movieLists && movieLists.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      </>
  </Container>
  )
}

export default SearchContianer;