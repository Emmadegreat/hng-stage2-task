import { Link } from 'react-router-dom'
import React from 'react'

const Card = ({movies}) => {
    return (
        <>
            {
                (movies.slice(0, 10)).map((movie) => {
                    return (
                        <div className='card' data-testid="movie-card" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} data-testid="movie-poster" alt={movie.title} />
                            <div className='movie-detail'>
                                <h5 data-testid="movie-title">{ movie.title}</h5>
                                <p data-testid="movie-release-date">{movie.release_date}</p>
                            </div>
                            <Link to={`/movie/${movie.id}`} id='view'>View</Link>
                        </div>
                    )
                })

            }

        </>
    )
}

export default Card
