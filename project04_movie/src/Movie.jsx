import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                ))}</ul>
            <p className="movie_summary">{summary.slice(0, 140)}...</p>     {/* 영화 설명 글이 140자만 출력되도록 설정, 140자가 넘어가면 글자를 자름 */}
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;