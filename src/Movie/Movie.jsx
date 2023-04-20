import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Movie.css";
import Loader from "../Loader/Loader";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=94bd2e06ce4da80d81d870e1591a9dfb`
            )
            .then((response) => {
                const parseData = response.data;
                setMovie(parseData);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Loader />
        );
    }

    const bgImage = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    };

    return (
        <div className="movie-container" style={bgImage}>
            <div className="back"></div>
            <div className="movie-header">
                <h1>{movie.title}</h1>
            </div>
            <div className="movie-details">
                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie-info">
                    <p className="tagline">{movie.tagline}</p>
                    <p className="overview">
                        <span >Overview:</span> <br /> <p className="overview-text">{movie.overview}</p>
                    </p>
                    <p>
                        <span className="info-label">Status:</span> {movie.status}
                    </p>
                    <p>
                        <span className="info-label">Genres:</span>{" "}
                        {movie.genres.map((genre) => {
                            return <span key={genre.id}>{genre.name} </span>;
                        })}
                    </p>
                    <p>
                        <span className="info-label">Languages:</span>{" "}
                        {movie.spoken_languages.map((language) => {
                            return <span key={language.iso_639_1}>{language.name}, </span>;
                        })}
                    </p>
                    <p>
                        <span className="info-label">Runtime:</span> {movie.runtime} minutes
                    </p>
                    <p>
                        <span className="info-label">Release Date:</span>{" "}
                        {movie.release_date}
                    </p>
                    <p>
                        <span className="info-label">Rating:</span> {movie.vote_average}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Movie;
