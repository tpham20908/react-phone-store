import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark bg-primary px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>products</Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <i className='fas fa-cart-plus mx-1'></i> My cart
          </ButtonContainer>
          {/* <button className='btn-cart'>
            <i className='fas fa-cart-plus mx-1'></i> My cart
          </button> */}
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`