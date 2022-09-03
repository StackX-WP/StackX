import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Jordan extends Component {
  render() {
    return(
      <BrandPage brand='Jordan' 
      addToCart={this.props.addToCart} 
      bannersrc='https://www.jordan11.shop/media/banner2.jpg'/>
    )
  }
}

export default Jordan; 