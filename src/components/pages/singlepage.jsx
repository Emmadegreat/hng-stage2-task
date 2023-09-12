import '../style/singlepage.css';

import React, {useEffect, useState} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

const Singlepage = () => {

    const [movieDetail, setMovieDetail] = useState(null);
    const apikey = '7248317da58d3e1b7fe495fc4dd8aaf1';
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;


    useEffect(() => {
        try {
            const getMovieDetail = async () => {
                //setLoading(true);
                const response = await axios.get(url);
                setMovieDetail(response.data);
                console.log(response.data);
                //setLoading(false)
            }
            getMovieDetail()

        } catch (error) {
            console.log(error, 'error!');
        }

    }, [id,apikey])


    return (
        <>
            <section>
                <div>
                    <h1>Movie detail page</h1>
                </div>
                {movieDetail ?(
                <section className='single-movie' key={movieDetail.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} data-testid="movie-poster" alt={movieDetail.title} />
                    <div>
                        <h5 data-testid="movie-title">Title:{ movieDetail.title}</h5>
                        <p data-testid="movie-release-date">Release date:{movieDetail.release_date}</p>
                        <p>Description: {movieDetail.overview}</p> <br />
                    </div>
                </section>

            ):(<p>hello</p>)}
            </section>

        </>
    )
}

export default Singlepage
