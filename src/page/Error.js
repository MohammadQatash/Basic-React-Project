import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className='error-container'>
            <div className='error'>
                <span>Error . . .</span>
                <span>The Product Does Not Exist</span>
                <Link to='/'>
                    <button className='btn-success'>Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Error
