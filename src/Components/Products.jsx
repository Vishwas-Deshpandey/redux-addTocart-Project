import React from 'react'
import Product from './Product'
import data from '../data'

const Products = () => {
    return (
        <div className='m-4'>
            <h5>All Products</h5>
            <hr />
            <div className='d-flex flex-wrap gap-5
'>
                {
                    data.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products