import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Adidas extends Component {
  render() {
    return(
     <div>
      <BrandPage brand='adidas' 
      addToCart={this.props.addToCart} 
      bannersrc='https://i.ytimg.com/vi/0JxhM7V5qwI/maxresdefault.jpg'/>
     </div>
      
    )
  }
}

export default Adidas; 