import '../style/moviedetailpage.css'

import React, {useEffect, useState} from 'react'

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import calendar_icon from '../images/Calendar.png'
import home_icon from '../images/Home.png'
import img37 from '../images/Rectangle 37.png'
import logo from '../images/tv.png'
import logout from '../images/Logout.png'
import movie_show_icon from '../images/Movie Projector.png'
import tv_icon from '../images/TV Show.png'
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {

    const [movieDetail, setMovieDetail] = useState(null);
    const apikey = '7248317da58d3e1b7fe495fc4dd8aaf1';
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;


    useEffect(() => {
        try {
            const getMovieDetail = async () => {
                const response = await axios.get(url);
                setMovieDetail(response.data);
                console.log(response.data);
            }
            getMovieDetail()

        } catch (error) {
            console.log(error, 'error!');
        }

    }, [id,apikey])

    const dateString = (dateString) => {
        const date = new Date(dateString);
        return date.toUTCString();
    }


    return (
        <>
            <section className='single-page-container'>
                <sidebar className="side-bar">
                    <div className='logo-wrapper'>
                        <Link to="/"><img src={logo} alt="MovieBox" /></Link>
                        <p>MovieBox</p>
                    </div>
                    <ul>
                        <Link to="/"><img src={home_icon} alt="home" />&nbsp;Home</Link>
                        <Link to="#"><img src={movie_show_icon} alt="movie show" />&nbsp;Movies</Link>
                        <Link to="#"><img src={ tv_icon} alt="tv series" />&nbsp;TV Series</Link>
                        <Link to="#"><img src={calendar_icon} alt="calendar" />&nbsp;Upcoming</Link>
                    </ul>
                    <div className='down-box'>
                        <p>Play movie quizes and earn free tickets</p>
                        <small>50k people are playing now</small>
                        <button>Start playing</button>
                    </div>
                    <Link to="#" id="logout"><img src={logout} alt="logout" /> Logout</Link>
                </sidebar>



                <section className='container'>
                {movieDetail ? (
                    <section  className="wrapper">
                        <div className='wrapper1' key={movieDetail.id}>
                            <div id='part1' key={movieDetail.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} data-testid="movie-poster" alt={movieDetail.title} />
                            </div>

                            <section className='detail-container'>

                                <div className='movie-details' id='part2'>
                                    <h4 data-testid="movie-title">Title: {movieDetail.title} . </h4>
                                    <b data-testid="movie-release-date">Release date: {dateString(movieDetail.release_date)} . </b>{/*utc* runtime in minutes*/}
                                    <b data-testid="movie runtime">Runtime: {movieDetail.runtime} minutes</b><br />
                                    <p data-testid="movie-overview">Overview: {movieDetail.overview}</p> <br />
                                </div>

                                <div id='part3'>
                                        <p><FaStar style={{ color: "#e82921" }} />&nbsp; {movieDetail.vote_average} | { movieDetail.vote_count}</p>
                                    <button>See Showtimes</button>
                                    <button style={{ backgroundColor: "#BE123C1A", color: "#000" }}>More watch options</button>
                                    <img src={img37} alt="group-movie" />
                                </div>

                            </section>

                        </div>
                        </section>

                    ) : (<p>...Loading</p>)

                }</section>

            </section>

        </>
    )
}

export default MovieDetailPage
