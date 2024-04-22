import { useEffect } from 'react';

import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=9df7f521';


export default function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>FlickFolio</h1>

      <div className='search'>
        <input 
          type='text' 
          placeholder='Search a movie'
          onChange={() => {}}  
        />
        <img 
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt='search icon'
          onClick={() => {}}
        />
      </div>

      <div className='container'>


      </div>
      
    </div>
  );
}