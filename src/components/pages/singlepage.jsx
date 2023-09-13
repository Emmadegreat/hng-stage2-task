import '../style/singlepage.css';

import React, {useEffect, useState} from 'react'

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img37 from '../images/Rectangle 37.png'
import logo from '../images/tv.png'
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

    const dateString = (dateString) => {
        const date = new Date(dateString);
        return date.toUTCString();
    }


    return (
        <>
            <section className='single-page-container'>
                <sidebar className="part1">
                    <div className='logo-wrapper'>
                        <Link to="/"><img src={logo} alt="MovieBox" /></Link>
                        <p>MovieBox</p>
                    </div>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="#">Movies</Link>
                        <Link to="#">TV Series</Link>
                        <Link to="#">Upcoming</Link>
                    </ul>
                    <div className='down-box'>
                        <p>Play movie quizes and earn free tickets</p>
                        <small>50k people are playing now</small>
                        <button>Start playing</button>
                    </div>
                    <Link to="#">Logout</Link>
                </sidebar>

                <section className='part2'>

                </section>

                <section className='part3'>
                   {movieDetail ?(
                    <div className='single-movie' key={movieDetail.id}>
                        {/*<img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} data-testid="movie-poster" alt={movieDetail.title} />*/}
                        <div id='holder'>
                            <span data-testid="movie-title">{ movieDetail.title} . </span>
                            <span data-testid="movie-release-date">{dateString(movieDetail.release_date)} . </span>{/*utc* runtime in minutes*/}
                                <span data-testid="movie runtime">{movieDetail.runtime} minutes</span><br />
                        </div>
                        <p data-testid="movie-overview">Overview: {movieDetail.overview}</p> <br />
                    </div>

                    ) : (<p>...Loading</p>)}
                    <div id='even'>
                        <p><FaStar style={{color:"yellow"}}/>8.5|350k</p>
                        <button>See Showtimes</button>
                        <button style={{backgroundColor:"#BE123C1A", color:"#000"}}>More watch options</button>
                        <img src={ img37} alt="group-movie" />
                    </div>
                </section>

            </section>

        </>
    )
}

export default Singlepage
