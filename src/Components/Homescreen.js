import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import '../styles/homescreenStyle.css'
import requests from '../Request'

function Homescreen() {
    return (
        <div className='homescreen'>
            {/* <h1>Homescreen Component</h1> */}
            <Nav />
            <Banner />
            <Row 
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title = 'Trending Now'
                fetchUrl = {requests.fetchTrending}
            />
            <Row 
                title = 'Top Rated'
                fetchUrl = {requests.fetchTopRated}
            />
            <Row 
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
            />
            <Row 
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Row 
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row 
                title = 'Romance Movies'
                fetchUrl = {requests.fetchRomanceMovies}
            />
            <Row 
                title = 'Documentaries'
                fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

export default Homescreen
