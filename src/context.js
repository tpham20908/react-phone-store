import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartGst: 0,
    cartQst: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(product => {
      const copiedProduct = { ...product };
      products = [...products, copiedProduct];
    });

    this.setState(() => {
      return { products }
    });
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = id => {
    const tempProducts = [...this.state.products];
    const idx = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[idx];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      }
    }, () => {
      this.addTotals();
    });
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const idx = tempCart.indexOf(selectedProduct);
    const product = tempCart[idx];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: tempCart }
    }, () => {
      this.addTotals();
    })
  }

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const idx = tempCart.indexOf(selectedProduct);
    const product = tempCart[idx];
    product.count = product.count - 1;
    if (product.count === 0) this.removeItem(id);
    else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: tempCart }
      }, () => {
        this.addTotals();
      })
    }
  }

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const idx = tempProducts.indexOf(this.getItem(id));
    let removedItem = tempProducts[idx];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;

    this.setState(() => {
      return {
        cart: tempCart,
        products: tempProducts
      }
    }, () => {
      this.addTotals();
    })
  }

  clearCart = () => {
    this.setState(() => {
      return { cart: [] }
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subTotal = 0;
    subTotal = this.state.cart.reduce((sum, item) => sum + item.total, 0);
    const strGst = (subTotal * 0.05).toFixed(2);
    const floatGst = parseFloat(strGst);
    const strQst = (subTotal * 0.09975).toFixed(2);
    const floatQst = parseFloat(strQst);
    const strTotal = (subTotal + floatGst + floatQst).toFixed(2);
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartGst: strGst,
        cartQst: strQst,
        cartTotal: strTotal
      }
    })
  }

  render() {
    const valueObj = {
      ...this.state,
      handleDetail: this.handleDetail,
      addToCart: this.addToCart,
      openModal: this.openModal,
      closeModal: this.closeModal,
      increment: this.increment,
      decrement: this.decrement,
      removeItem: this.removeItem,
      clearCart: this.clearCart
    }

    return (
      <ProductContext.Provider value={valueObj}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };