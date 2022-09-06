import React, { render, Component } from 'react'; 


// shoe object contains all data about single shoe from the database

class ShoeDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgurl = this.props.pictures[this.props.shoe.name];
    const { productid, price, name } = this.props.shoe;
    const handleClick = (productid, price, name) => {
      // console.log(this.props.addToCart);
      return () => this.props.addToCart(productid, price, name);
    }
    return (
      <div className='shoesBox'>
        <img src={imgurl} style={{height: "200px", width: "200px"}}/>
        <p><b>Name:</b> {this.props.shoe.name}</p>
        <p><b>Size:</b> {this.props.shoe.size}</p>
        <p><b>Price:</b> ${this.props.shoe.price}</p>
        <button className='shoeButton' onClick={handleClick(productid, price, name)}
        style={{textAlign: 'center'}}
        >Add to Cart</button>     
      </div>
    )
  }
}

export default ShoeDisplay;