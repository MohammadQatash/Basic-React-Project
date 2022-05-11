import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost} from 'react-icons/fa' 
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
    <div className="footer-basic">
        <footer>
            <div className="social">
                <Link to='/'><i className="icon ion-social-instagram"><FaFacebookF /></i></Link>
                <Link to='/'><i className="icon ion-social-snapchat"><FaTwitter /></i></Link>
                <Link to='/'><i className="icon ion-social-twitter"><FaInstagram /></i></Link>
                <Link to='/'><i className="icon ion-social-facebook"><FaSnapchatGhost /></i></Link>
            </div>
            <ul className="list-inline flex-center">
                <li className="list-inline-item"><Link to='/'>Home</Link></li>
                <li className="list-inline-item"><Link to='/'>Services</Link></li>
                <li className="list-inline-item"><Link to='/'>About</Link></li>
                <li className="list-inline-item"><Link to='/'>Terms</Link></li>
                <li className="list-inline-item"><Link to='/'>Privacy</Link></li>
            </ul>
            <p className="copyright">Commerce © 2022</p>
        </footer>
    </div>
    )
}

export default Footer
