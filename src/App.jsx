import React from 'react'
import Movie from './Movie/Movie'
import Home from './Home/Home'


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/movie/:id" element={<Movie />} />
        <Route exact path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App