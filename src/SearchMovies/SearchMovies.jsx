import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// import BgImage from '../assets/IQ30.gif'

import './SearchMovies.css'


function SearchMovies() {


    const [searchMovie, setSearchMovie] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [searchKeyword, setSearchKeyword] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);

    console.log(searchKeyword)

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchKeyword}&api_key=94bd2e06ce4da80d81d870e1591a9dfb`)
            .then((response) => {
                // console.log(response)
                const parseData = response.data;
                setSearchMovie(parseData.results);
                setLoading(false);
            });
    }, [searchKeyword]);

    const toggleShowAll = () => {
        setShowAll((prevState) => !prevState);
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    function SubmitData(e) {
        e.preventDefault();
        setSearchKeyword(e.target.elements.query.value);
    }

    // console.log(searchKeyword)
    // console.log(searchMovie)



    let TotalMovie = searchMovie.filter((movie) => movie.poster_path !== null && movie.title && movie.title !== null)

    const displayedMovies = showAll ? TotalMovie : TotalMovie.slice(0, 12);
    console.log(displayedMovies)

    // const bgImage = {
    //     backgroundImage: `url(https://image.tmdb.org/t/p/original/${displayedMovies[1].backdrop_path})`
    // }

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none"
    }


    return (
        <div className='searchHeader'>
            <div className='searchSection' >
                <h1>Welcome to AiMovies</h1>
                <h2>Search for your favorite movies</h2>
                <form className="searchBox" onSubmit={SubmitData}>
                    <input type="text" name="query" placeholder="i.e. Jurassic Park" className="input" />
                    <button type="submit" className="button">Search</button>
                </form>
            </div>
            {displayedMovies.length > 0 &&

                <div className="popular-movies-container">
                    <div className="popular-movies-heading">
                        <h2>Search Movies</h2>
                    </div>
                    <div className="popular-movies-grid">
                        {displayedMovies.map((movie) => {
                            return (
                                <div key={movie.id} className="popular-movie-item">
                                    <NavLink to={`/movie/${movie.id}`} style={cardStyle}>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                                        <h3>{movie.title}</h3>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                    {!showAll && (
                        <div className="load-more-btn-container">
                            <button className="load-more-btn" onClick={toggleShowAll}>Load More</button>
                        </div>
                    )}
                </div>
            }
        </div>
    )

}

export default SearchMovies