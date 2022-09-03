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
      <div>
        <img src={imgurl} style={{height: "100px", width: "100px"}}/>
        <p>Name: {this.props.shoe.name}</p>
        <p>Size: {this.props.shoe.size}</p>
        <p>Price: ${this.props.shoe.price}</p>
        <button onClick={handleClick(productid)}>Add to Cart</button> 
          
      </div>
    )
  }

}

export default ShoeDisplay;