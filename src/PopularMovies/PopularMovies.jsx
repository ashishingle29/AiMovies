import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./PopularMovies.css";
import "../assets/IQ30.gif"

function PopularMovies() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=94bd2e06ce4da80d81d870e1591a9dfb&language=en-US&page=1"
      )
      .then((response) => {
        const parseData = response.data;
        setMovies(parseData.results);
        setLoading(false);
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  let TotalMovie = movies.filter((movie) => movie.poster_path !== null);

  const displayedMovies = showAll ? TotalMovie : TotalMovie.slice(0, 12);

  if (loading) {
    return <div>Loading...</div>;
  }

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    fontFamily: "Roboto, sans-serif",
  };

  return (
    <div className="popular-movies-container">
      <div className="popular-movies-heading">
        <h2>Popular Movies</h2>
      </div>
      <div className="popular-movies-grid">
        {displayedMovies.map((movie) => {
          return (
            <div key={movie.id} className="popular-movie-item">
              <NavLink to={`/movie/${movie.id}`} style={cardStyle}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </NavLink>
            </div>
          );
        })}
      </div>
      {!showAll && (
        <div className="load-more-btn-container">
          <button className="load-more-btn" onClick={toggleShowAll}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
