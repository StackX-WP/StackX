import React from 'react';
import { render, Component } from 'react';
import BrandPage from './BrandPage';

class Balenciaga extends Component {
  render() {
    return(
     <div>
      <BrandPage brand='Balenciaga' 
      addToCart={this.props.addToCart} 
      bannersrc='https://hips.hearstapps.com/hmg-prod/images/picture-taken-on-september-1-shows-us-singer-cardi-b-the-news-photo-1599058800.jpg?crop=1xw:0.74963xh;center,top&resize=640:*'
      // style ={{objectFit: 'cover'}}
      />
     </div>
      
    )
  }
}

export default Balenciaga; 