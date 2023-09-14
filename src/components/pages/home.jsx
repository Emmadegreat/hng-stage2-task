import '../style/home.css';

import React,{useEffect, useState} from 'react'

import Card from './card';
import {FaChevronRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

    //search function mapping
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
                        <Link to="/"><img src={logo} alt="MovieBox" /></Link>
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
                <div className='hero-text'>
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

            <main className={click ? 'main active': 'main'}>
                <div className='featured-section'>
                    <h3>Top Rated Movie</h3>
                    <button>
                        <Link to="/seemore">See more </Link>
                        <FaChevronRight id='chevron-right-icon' />
                    </button>
                </div>
                <section className="card-wrapper">
                    <Card movies={searchMovie} />
                </section>

            </main>

        </>
  )
}

export default Home
