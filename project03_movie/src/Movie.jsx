import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: 'http://www.omdbapi.com/?i=tt3896198&apikey=eaf0393c',
          s: 'Star Wars', // 검색어나 원하는 영화 제목을 입력하세요.
        },
      });
      setMovies(response.data.Search);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
