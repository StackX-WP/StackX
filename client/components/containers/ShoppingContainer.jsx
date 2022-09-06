import React, { render, Component } from 'react'; 
import ShoeDisplay from './ShoeDisplay';

class ShoppingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      cartCache: {},
    }
  }

  componentDidMount() {
    fetch(`/api/shoes/${this.props.productid}`)
      .then(res => res.json())
      .then(data => {
        const {name, price} = data;
        this.setState({name, price});
      })
      // .then(() => {
      //   const newCart = {...this.state.cartCache};
      //   if(!this.state.cartCache[this.props.productid]) {
      //       newCart[this.props.productid] = this.props.productid;
      //       this.setState({cartCache: newCart});
      //       // console.log("cartCache: ", cartCache);
      //       console.log("this.state.cartCache: ", this.state.cartCache );
      //   };
      // })
        
    // const cartCache = {}
    // if(!cartCache[this.props.productid]) {
    //   cartCache[this.props.productid] = this.props.productid;
    //   console.log("cartCache: ", cartCache);
  }


  componentDidUpdate() {
  }


  render() {
    const { productid } = this.props;
    const { cart } = this.props;
    // console.log("this.cart.id: ", cart[id]);
    
    console.log("productid: ", productid);
    // console.log("this.props.productid. :", this.props.productid)
    const quantity = cart[productid];
    const handleClick = (id) => {
      // console.log(this.props.subtractFromCart(productid));
      console.log("this.cart: ", cart);
      return () => this.props.subtractFromCart(id);
    }
    return(
        <div>
          <div className='cart'>
            <h4>{this.state.name} X {quantity} : {(this.state.price * quantity)}</h4>
            <button className='removeButton' onClick={handleClick(productid)}>Remove an Item</button>
          </div>
          <div>
          </div>
        </div>
        
        
    )
  }
} 


  export default ShoppingContainer; 