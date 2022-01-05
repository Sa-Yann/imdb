import React, {useState, useEffect} from 'react';
import axios from '../axiosInstance';
import requests from '../Request';
import '../styles/bannerStyle.css'

function Banner() {
    // Need a movie variable to be bale to store the movie infoos in it and use the info in my banner component
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ],

            console.log('request.data.results.length: ' + request.data.results.length),

            console.log('Math.random() * request.data.results.length): ' + Math.random() * request.data.results.length),

            console.log('Math.floor(Math.random() * request.data.results.length - 1) : ' + Math.floor(Math.random() * request.data.results.length - 1))
            )
            return request;
        }

        fetchData();
        
    }, []);

    console.log(movie)

    function truncate(string, n) {
        // string is the all description details 
        // n the aount of caracters before the description is stoped
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <header
            style={{
                backgroundSize: 'cover',
                // backgroundImage:`url('https://www.cine-tales.com/wp-content/uploads/Netflix.jpg')`,
                backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center center',
                height: '480px',
                // position: 'relative',
                color: 'white',
                // objectFit: 'contain',

            }}
        >
          <div className='banner__content'>
              <h1 className="bannner_title">
                  {movie?.title || movie?.name || movie?.original_name}
            </h1>
              <div className="buttons__container">
                  <button className='banner__button'>Play</button>
                  <button className='banner__button'>My List</button>
              </div>
              <h5 className="banner__description">{truncate(`${movie?.overview}`, 150)}</h5>
          </div>
          <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
