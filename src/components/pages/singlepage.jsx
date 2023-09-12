import '../style/singlepage.css';

import React, {useEffect, useState} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

const Singlepage = () => {

    const [movieDetail, setMovieDetail] = useState([]);
    const { id } =useParams()


    useEffect(() => {
        try {
            const getMovieDetail = async () => {
                //setLoading(true);
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);
                setMovieDetail(response.data);
                //setLoading(false)
            }
            getMovieDetail()

        } catch (error) {
            console.log(error, 'error!');
        }

    }, [id])


    return (
        <>
            {movieDetail ?(
                <section className='single-movie'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} data-testid="movie-poster" alt={movieDetail.title} />
                    <div>
                        <h5 data-testid="movie-title">Title:{ movieDetail.title}</h5>
                        <p data-testid="movie-release-date">Release date:{movieDetail.release_date}</p>
                        <b>Rating: { movieDetail.rating && movieDetail.rating.rate}</b>
                        <p>Description: {movieDetail.description}</p> <br />
                    </div>
                </section>):(<p>hello</p>)
            }
        </>
    )
}

export default Singlepage
