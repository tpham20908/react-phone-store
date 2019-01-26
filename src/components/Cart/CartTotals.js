import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartGst, cartQst, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                onClick={() => clearCart()}
              >clear cart</button>
            </Link>
            <h5>
              <span className="text-title">subtotal: </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">GST (5%): </span>
              <strong>${cartGst}</strong>
            </h5>
            <h5>
              <span className="text-title">QST (9.975%): </span>
              <strong>${cartQst}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>
              <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
