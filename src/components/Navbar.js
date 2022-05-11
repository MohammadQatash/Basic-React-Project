import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const {totalCount} = useGlobalContext();

    return (
        <div className='navbar flex'>
            <Link to='/'>
                <div className='logo'>
                    <img src="../favicon.png" alt="Commerce" className='logo-img'/>
                    <h2 className='ml-10'>Commerce</h2>
                </div>
            </Link>
            <Link to='/cart'>
                <div className='fa-shopping-cart'><FaShoppingCart /></div>
                <div className={totalCount >= 1 ? 'position-total-count animate-bounceIn' : 'position-total-count animate-bounceOut'}>
                    <div className='total-count'>{totalCount}</div>
                </div>
            </Link>
        </div>
    )
}
export default Navbar
