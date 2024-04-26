import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';

const Product = ({ product }) => {

    const dispatch = useDispatch();


    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.imgUrl} className="card-img-top" alt="..." style={{ height: "45vh" }} />
            <div className="card-body">
                <h6 className="card-title">{product.product}</h6>
                <p className="card-text text-success">₹ {product.price}</p>
                <p className="card-text">{product.productDescription.slice(0, 25)}...</p>
                <button className="btn btn-warning w-100" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
        </div>

    )
}

export default Product