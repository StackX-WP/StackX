import React, { render, Component } from 'react'; 


class ShoppingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0
    }
  }

  componentDidMount() {
    fetch(`/api/shoes/${this.props.productid}`)
      .then(res => res.json())
      .then(data => {
        const {name, price} = data;
        this.setState({name, price});
      })
  }

  componentDidUpdate() {
    
  }

  render() {
    const { productid } = this.props.productid;
    const quantity = this.props.cart[this.props.productid]
    const handleClick = (productid) => {
      return () => this.props.subtractFromCart(productid);
    }
    return(
        <div>
          <h4>{this.state.name} X {quantity} : {(this.state.price * quantity)}</h4>
          <button onClick={handleClick(productid)}>Remove an Item</button>  
        </div>
    )
  }
} 


  export default ShoppingContainer; 