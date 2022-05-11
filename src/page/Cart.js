import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {removeitemcart, totalPrice, removeDuplicatesCart, increaseNumber, decermentNumber} = useGlobalContext();
    if(removeDuplicatesCart.length === 0) {
        return <div className='empty'>
            <h1 className='mb-30'>Your Cart Is Empty</h1>
            <Link to='/'>
                <button className='btn-success'>Back Home</button>
            </Link>
        </div>
    }
    return (
        <>
            <div className='products-container'>
                {
                    removeDuplicatesCart.map((item, itemIndex) => {
                        const {id, image, category, price, number} = item;
                        return (
                            <div className='product' key={itemIndex}>
                                <img src={image} alt={category}/>
                                <div className='category-price'>
                                    <div>{category}</div>
                                    <div>${price}</div>
                                </div>
                                <div className='count-container'>
                                    <div className='count-box select-none'>
                                        <span
                                            className="px-10"
                                            onClick={() => decermentNumber(id)}
                                        >-</span>
                                        <span>{number >= 1 ? number : item.number = 1}</span>
                                        <span
                                            className="px-10"
                                            onClick={() => increaseNumber(id)}
                                        >+</span>
                                    </div>
                                    <button className='btn-danger' onClick={() => removeitemcart(id)}>remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                <div className='total'>Subtotal: ${totalPrice}</div>
        </>
    )
}

export default Cart
