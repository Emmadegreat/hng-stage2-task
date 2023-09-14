import React, { useEffect, useState } from 'react'

import Card from './card';
import {FaChevronRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import apple from '../images/apple.png'
import axios from 'axios'
import imdb from '../images/imbd-icon.png'
import logo from '../images/tv.png';
import play from '../images/Play.png'

const SeeMore = () => {


    /*const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7248317da58d3e1b7fe495fc4dd8aaf1')
            .then(response => response.json())
            .then(json => console.log(json.results));
    }
    getMovie();*/

    const [movieList, setMovieList] = useState({ results: [] });
    const [search, setSearch] = useState("");
    const [click, setClick] = useState(false);
    const Open = () => setClick(!click);

    //api key and url declaration
    const API_KEY = "api_key=7248317da58d3e1b7fe495fc4dd8aaf1";
    const base_url = 'https://api.themoviedb.org/3/movie/top_rated?'
    const url = base_url+API_KEY;

    const FetchData = async () => {

        try {
            const resp = await axios.get(url);
            setMovieList(resp.data)
            console.log(resp.data.results);
        } catch (error) {
            alert("Wooops! error")
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData()
    }, [])


    const style = ({
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "30px",
        padding: "20px",

    })


    return (
        <><Link to="/">Home page</Link> <br />
            <section className='see more' style={style}>

                {
                (movieList.results).map((movie) => {
                    return (
                        <div className='card' data-testid="movie-card" key={movie.id} >

                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                data-testid="movie-poster" alt={movie.title}
                                style={{width:"250px",height:"250px"}}
                            />
                            <div className='movie-detail'>
                                <h5 data-testid="movie-title">Title: {movie.title}</h5>
                                <p data-testid="movie-release-date">Release date: {movie.release_date}</p>
                            </div>
                            <Link to={`/movie/${movie.id}`} id='view'>View</Link>
                        </div>
                    )
                })

            }</section>

        </>
    )
}

export default SeeMore
