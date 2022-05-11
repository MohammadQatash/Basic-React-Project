import React from 'react'
import Product from './Product';
import Slider from './Slider';
import Footer from './Footer';
import { useGlobalContext } from '../context'

const Home = () => {
    const {products} = useGlobalContext();
    return (
        <>
            <Slider />
            <div className='products-container'>
                {products.map((product) => {
                return <Product key={product.id} {...product}/>
                })}
            </div>
            <Footer />
        </>
    )
}

export default Home
