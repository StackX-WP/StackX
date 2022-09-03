import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Balenciaga extends Component {
  render() {
    return(
     <div>
      <BrandPage brand='Balenciaga' 
      addToCart={this.props.addToCart} 
      bannersrc='https://www.sneaker2all.com/media/wysiwyg/infortis/slideshow/balenciaga-banner-1.jpg'/>
     </div>
      
    )
  }
}

export default Balenciaga; 