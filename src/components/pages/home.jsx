import '../style/home.css';

import { Link, NavLink } from 'react-router-dom';
import React,{useEffect, useState} from 'react'

import {FaChevronRight} from 'react-icons/fa';
import apple from '../images/apple.png'
import axios from 'axios'
import imdb from '../images/imbd-icon.png'
import logo from '../images/tv.png';
import play from '../images/Play.png'

const Home = () => {


    /*const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7248317da58d3e1b7fe495fc4dd8aaf1')
            .then(response => response.json())
            .then(json => console.log(json.results));
    }
    getMovie();*/

    const [movieList, setMovieList] = useState({ results: [] });
    const [search, setSearch] = useState("");
    const [click, setClick] = useState();
    const Open = () => setClick(!click);
    const Close = () => setClick(false);

    const API_KEY = "api_key=7248317da58d3e1b7fe495fc4dd8aaf1";
    const base_url = 'https://api.themoviedb.org/3/movie/top_rated?'
    const url = base_url+API_KEY;

    const FetchData = async () => {

        try {
            const resp = await axios.get(url);
            setMovieList(resp.data)
            console.log(resp.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchData()
    }, [])

    const searchMovie = (movieList.results).filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <section className='hero-section'>
                <header>
                    <div className='logo-wrapper'>
                        <NavLink to="/"><img src={logo} alt="MovieBox" /></NavLink>
                        <p>MovieBox</p>
                    </div>
                    <form>
                        <input
                            type="search"
                            name='search'
                            placeholder='What do you want to watch?'
                            value={search}
                            onChange={onChangeHandler}
                        />
                    </form>
                    <div className='login-wrapper'>
                        <span>Login</span>
                        <div className="hamburger" onClick={Open}>
                            {click ? (<p>X</p>) : (<p>=</p>)}
                        </div>
                    </div>
                </header><br /><br />
                <div className='text-section'>
                    <h3>John Wick 3 :<br /> Parabellum</h3>
                    <div className='icon-wrappers'>
                        <div>
                            <img src={imdb} alt={imdb} />
                            <span>86.0/100</span>
                        </div>
                        <div>
                            <img src={apple} alt={apple} />
                            <span>97%</span>
                        </div>
                    </div>
                    <p>
                        John Wick is on the run after killing a member of
                        the international assassins' guild, and with a $14
                        million price tag on his head, he is the target of
                        hit men and women everywhere.
                    </p>
                    <button><img src={play} alt="play" /> WATCH TRAILER</button>
                </div>
            </section>

            <main className='main'>
                <div className='featured-section'>
                    <h3>Featured Movie</h3>
                    <button>See more <FaChevronRight id='chevron-right-icon'/></button>
                </div>
                <section className="card-wrapper">
                    {
                        (searchMovie).map((movie) => {
                            return (
                                <div className='card' data-testid="movie-card" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} data-testid="movie-poster" alt={movie.title} />
                                    <div className='movie-detail'>
                                        <h5 data-testid="movie-title">Title: { movie.title}</h5>
                                        <p data-testid="movie-release-date">Release date: {movie.release_date}</p>
                                        <Link to={`/movie/${movie.id}`} id='view'>View</Link>
                                    </div>


                                </div>
                            )
                        })

                    }

                </section>

            </main>

        </>
  )
}

export default Home
