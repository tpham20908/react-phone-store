import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className='card'>
          <ProductConsumer>
            {
              value => (
                <div
                  className='img-container p-5'
                  onClick={() => value.handleDetail(id)}>
                  <Link to='/details'>
                    <img src={img} alt='product' className='card-img-top' />
                  </Link>
                  <button
                    className='cart-btn'
                    disabled={inCart}
                    onClick={() => {
                      value.addToCart(id)
                      value.openModal(id)
                    }}>
                    {inCart ?
                      (<p className='text-capitalize mb-0'>in cart</p>) :
                      (<i className='fas fa-cart-plus' />)}
                  </button>
                </div>
              )
            }
          </ProductConsumer>
          {/* cart footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-item-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>{price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background-color: transparent;
    border-top: transparent;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background-color: rgba(225, 225, 225, 0.4);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top, .cart-btn {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.05);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    background-color: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`