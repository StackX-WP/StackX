import React, { render, Component } from 'react'; 


// shoe object contains all data about single shoe from the database

class ShoeDisplay extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const imgurl = this.props.pictures[this.props.shoe.name];
    const { productid } = this.props.shoe;
    const handleClick = (productid) => {
      // console.log(this.props.addToCart);
      return () => this.props.addToCart(productid);
    }
    return (
      <div className='shoesBox'>
        <img src={imgurl} style={{height: "200px", width: "200px"}}/>
        <p><b>Name:</b> {this.props.shoe.name}</p>
        <p><b>Size:</b> {this.props.shoe.size}</p>
        <p><b>Price:</b> ${this.props.shoe.price}</p>
        <button onClick={handleClick(productid)}
        style={{}}
        >Add to Cart</button>     
      </div>
    )
  }

}

export default ShoeDisplay;