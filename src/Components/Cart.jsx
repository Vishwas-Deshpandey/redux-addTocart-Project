import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {clearAllCart, decQty, incQty, removeItem } from '../actions/actions';
import { NavLink } from 'react-router-dom'

const Cart = () => {

  // const [qty, setQty] = useState(1)

  const cartItems = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch();


  return (
    <div className="row m-4">
        {
          cartItems.cartItem.length > 0 ? (
            
          <>

            <div className="col-md-8 table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>

                  {cartItems.cartItem.map((i, index) => (
                    <tr key={i.id}>
                      <th scope="row">{index + 1}</th>
                      <th scope="row">
                        <img src={i.imgUrl} className="img-fluid rounded-circle" style={{ width: "65px", height: "65px" }} alt='' />
                      </th>
                      <td>{i.product}</td>
                      <td>{i.price}</td>

                      <td>
                        <div className='d-flex'>
                          <button className='fs-4 bg-secondary text-light' style={{ width: "40px", border: 'none' }}
                            onClick={() => i.qty === 1 ? dispatch(removeItem(i.id)) : dispatch(decQty(i.id))}>
                            {i.qty === 1 ?
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                              </svg>
                              : '-'}
                          </button>

                          <input type='text' className='text-center' placeholder='0' value={i.qty} style={{ width: "65px", outline: "none" }} readOnly />
                          <button className='fs-4 bg-secondary  text-light' style={{ width: "40px", border: 'none' }} onClick={() => dispatch(incQty(i.id))}>+</button>
                        </div>

                      </td>

                      <td>{i.qty} x {i.price} = {i.newPrice}</td>

                      <td>
                        <button className='border-0 bg-light-subtle' onClick={() => dispatch(removeItem(i.id))}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            <div className="col-md-4 h-25 bg-light">
              <div className='pt-4'>
                <h4 className='font-bold'>Cart Total</h4>
                <hr />
              </div>

              <div className='row px-2'>
                <p className='col-md-8'>subtotal: </p>
                <b className='col-md-4 text-end'>₹ {cartItems.cartTotal}</b>

                <p className='col-md-8'>shippingCharge: </p>
                <b className='col-md-4 text-end'>₹ {cartItems.shippingCharge}</b>


                <p className='col-md-8'>Total Amount: </p>
                <b className='col-md-4 text-end'>₹ {cartItems.totalPayment}</b>

                <button className='bg-primary p-2 text-light border-0 my-4 rounded w-full'>make payment</button>
                <button className='bg-danger p-2 text-light border-0 rounded w-full' onClick={() => dispatch(clearAllCart())}>RESET CART</button>
              </div>

            </div>
          </>

          ) : (

            <div className='w-full h-100 pt-5 mt-5 d-flex flex-column align-items-center gap-4 justify-content-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width={130} height={130} fill="currentColor" className="bi bi-cart-x-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708" />
              </svg>

              <h2>Look's Like your Cart is Empty</h2>

              <NavLink to='/' className='btn btn-outline-primary p-2 rounded'>Buy Some Products</NavLink>
            </div>

          )


        }


      
    </div>

  )
}

export default Cart