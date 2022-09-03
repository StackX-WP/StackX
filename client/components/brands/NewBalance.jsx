import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class NewBalance extends Component {
  render() {
    return(
      <BrandPage brand='New Balance' 
      addToCart={this.props.addToCart} 
      bannersrc='https://file-uploads-cr.s3.amazonaws.com/newbalance_banner_1646167760976.jpeg'/>
    )
  }
}

export default NewBalance; 