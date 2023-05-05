import React from 'react'
import { Link } from 'react-router-dom';

import './movieCard.css' /**for button only */

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.show.image !== null ? movie.show.image.medium : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.show.type}</span>
          <h3>{movie.show.name}</h3>
          <Link to={`/movie/${movie.show.id}`}>
            <button className='btn'>Details</button>
          </Link>
        </div>
    </div>
  );
}

export default MovieCard