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
                        <Link to="#"><FaFacebookSquare/></Link>
                    </li>
                    <li>
                        <Link to="#"><FaInstagram/></Link>
                    </li>
                    <li>
                        <Link to="#"><FaTwitter/></Link>
                    </li>
                    <li>
                        <Link to="#"><FaYoutube/></Link>
                    </li>
                </div>
                <div className='terms-and-conditions'>
                    <p>Conditions of Use</p>
                    <p>Privacy & Policy</p>
                    <p>Press Room</p>
                </div>
                <div className='copyright'>
                    <p id='copyright'>{ props.copyright}</p>
                </div>
            </footer>

        </>
    )
}

export default Footer
