import React,{Fragment, useState} from 'react'
import{BsSearch} from 'react-icons/bs'
import './NavBar.css'
import { Routes, Route } from 'react-router-dom'
import trending from './trending'
import movie from './movie'
import Trending from './trending'
import Favorite from './Favorite'
import TvShow from './tvshow'
import App from '../App'


function Navbar() {
  return (
    <div className="Navbar">
      <Fragment>
        <nav className=''>
          <div className="nav-option">
            <h1>WatchBox Movie</h1>
            <span>Trending</span>
            <span>Tv Show</span>
            <span>Favorite</span>
          </div>
        </nav>
        {/* <Routes>
            <Route path='App' element={<App/>}></Route>
            <Route path='Trending' element={<Trending/>}></Route>
            <Route path='TvShow' element={<TvShow/>}></Route>
            <Route path='Favorite' element={<Favorite/>}></Route>
        </Routes> */}
      </Fragment>
    </div>
  )
}

export default Navbar



