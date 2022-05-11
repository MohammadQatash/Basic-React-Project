import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaCartPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Product = ({id, image, category, price, title, rating}) => {
    const {cartProducts} = useGlobalContext();
    return (
        <div className='product'>
            <Link to={`/products/${id}`}>
                <img src={image} alt={category}/>
            </Link>
            <div className='category-price'>
                <div>{category}</div>
                <div>${price}</div>
            </div>
            <p>{title.length > 30 ? `${title.slice(0, 30)}. . .` : title}</p>
            <div className='rate-cart'>
                <div className='rate-box'>
                   <div className={rating.rate > 4 ? 'rate green' 
                   : rating.rate < 4 && rating.rate > 2.5 ? 'rate blue' : 'rate red'}>{rating.rate}</div>
                   <AiFillStar className='ai-fill-star'/>
                </div>
                    <div className='fa-cart-plus' onClick={() => cartProducts(id)}><FaCartPlus/></div>
            </div>
        </div>
    )
}

export default Product
