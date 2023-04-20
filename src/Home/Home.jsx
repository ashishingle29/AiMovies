import React from 'react'
import PopularMovies from '../PopularMovies/PopularMovies'
import SearchMovies from '../SearchMovies/SearchMovies'


function Home() {
  return (
    <div>
      <SearchMovies />
      <PopularMovies />
      </div>
  )
}

export default Home