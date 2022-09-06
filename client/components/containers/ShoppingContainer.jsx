import React, { render, Component } from 'react'; 
import ShoeDisplay from './ShoeDisplay';

class ShoppingContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { productid } = this.props;
    const { quantity, name, price } = this.props.cart[productid];
  
    const handleClick = (id) => {
      return () => this.props.subtractFromCart(id);
    }

    return(
        <div>
          <div className='cart'>
            <h4>{name} x {quantity} : ${(price * quantity)}</h4>
            <button className='removeButton' onClick={handleClick(productid)}>Remove an Item</button>
          </div>
          <div>
          </div>
        </div>
    )
  }
} 


  export default ShoppingContainer; 