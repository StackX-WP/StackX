import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Nike extends Component {
  render() {
    return(
      <BrandPage brand='Nike' 
      addToCart={this.props.addToCart} 
      bannersrc='https://i.ytimg.com/vi/TonNdlqz2uI/maxresdefault.jpg'/>
    )
  }
}

export default Nike; 