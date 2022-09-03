import React, {Component} from 'react';
import ShoppingContainer from './containers/ShoppingContainer';

class Shoppingcart extends Component{
    constructor(props) {
        super(props)
        this.modifyTotal = this.modifyTotal.bind(this);
        this.state = {
            totalPrice: 0
        }
    }

    modifyTotal(amount) {
        this.setState({totalPrice: this.state.totalPrice + amount});
    }

    render() {
        const { cart } = this.props;
        const cartItems = [];
        Object.keys(cart).forEach(productid => {
            cartItems.push(<ShoppingContainer productid={productid} cart={cart} subtractFromCart={this.props.subtractFromCart}/>)
        })
        return(
            <div id='shoppingcart'>
                <h2>Cart</h2>
                {cartItems}
            </div>

        )
    }
}

export default Shoppingcart; 