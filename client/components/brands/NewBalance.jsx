import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class NewBalance extends Component {
  render() {
    return(
      <BrandPage brand='New Balance' 
      addToCart={this.props.addToCart} 
      bannersrc='https://m.media-amazon.com/images/S/aplus-media/vc/c6ea76a3-17f5-4fa6-b08b-91db1206c45c.__CR0,0,1464,600_PT0_SX1464_V1___.png'/>
    )
  }
}

export default NewBalance; 