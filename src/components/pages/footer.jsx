import '../style/footer.css'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer className='footer'>
                <div className='social-media-links'>
                    <li>
                        <Link to="facebook"><FaFacebookSquare/></Link>
                    </li>
                    <li>
                        <Link to="instagram"><FaInstagram/></Link>
                    </li>
                    <li>
                        <Link to="twitter"><FaTwitter/></Link>
                    </li>
                    <li>
                        <Link to="youtube"><FaYoutube/></Link>
                    </li>
                </div>
                <div className='terms-and-conditions'>
                    <p>Conditions of Use</p>
                    <p>Privacy & Policy</p>
                    <p>Press Room</p>
                </div>
                <div className='copyright'>
                    <p>{ props.copyright}</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
