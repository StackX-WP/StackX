import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Jordan extends Component {
  render() {
    return(
      <BrandPage brand='Jordan' 
      addToCart={this.props.addToCart} 
      bannersrc='https://kicksice.com/wp-content/uploads/2022/08/banner27-1400x512.jpg'/>
    )
  }
}

export default Jordan; 