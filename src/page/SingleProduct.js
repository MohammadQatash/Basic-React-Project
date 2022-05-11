import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { AiFillStar } from "react-icons/ai";

const SingleProduct = () => {
    const {product, singleProduct, rating} = useGlobalContext();
    const {id} = useParams();
    const {image, category, price, description, title} = product;

    React.useEffect(() => {
       return singleProduct(id)
    }, [id, singleProduct])

    return (
        <div className='product-container'>
            <img src={image} alt={category} />
            <div className='info'>
                <div>Category: {category}</div>
                <div>{title}</div>
                <p>Description: {description}</p>
                <div className='specific-info'>
                    <div>Count: {rating.count}</div>
                    <div>Price: ${price}</div>
                    <div>Rate: {rating.rate}</div>
                    <div><AiFillStar className='ai-fill-star ml-40'/></div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
