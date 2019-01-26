import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value => {
            const { id, img, title, price, inCart, company, info } = value.detailProduct;
            return (
              <div className='container py-5'>
                {/* title */}
                <div className='row'>
                  <div className='col-10 mx-auto text-center text-blue text-slanted my-5'>
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end title */}
                {/* product info */}
                <div className='row'>
                  <div className='col-10 col-md-6 mx-auto my-3'>
                    <img src={img} alt='product' className='img-fluid' />
                  </div>
                  <div className='col-10 col-md-6 mx-auto my-3 text-capitalize'>
                    {/* title */}
                    <h2>model: {title}</h2>
                    {/* company */}
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      made by: {company}
                    </h4>
                    {/* price */}
                    <h4 className='text-blue'>
                      <strong>price: <span className='ml-1'>$</span>{price}</strong>
                    </h4>
                    {/* info */}
                    <p className='font-weight-bold mt-3 mb-0'>
                      some info about product:
                    </p>
                    <p className='text-muted lead'>{info}</p>
                    {/* buttons */}
                    <Link to='/'>
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      {inCart ? 'in cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
                {/* end product info */}
              </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}
