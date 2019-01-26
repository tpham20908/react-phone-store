import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';
import Title from './Title';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container py-5'>
          <Title name='our' title='products' />
          <div className='row'>
            <ProductConsumer>
              { value => value.products.map(product => <Product key={product.id} product={ product }/>) }
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
