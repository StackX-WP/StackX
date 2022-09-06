import React, {Component} from 'react';
import ShoppingContainer from './containers/ShoppingContainer';

class Shoppingcart extends Component{
    constructor(props) {
        super(props)
        // this.modifyTotal = this.modifyTotal.bind(this);
        // this.state = {
        //     totalPrice: 0
        // }
    }

    // modifyTotal(amount) {
    //     this.setState({totalPrice: this.state.totalPrice + amount});
    // }

    // this.props.cart = { id of shoe: quantity of shoe }

    render() {
        const { cart } = this.props;
        const cartItems = [];
        let totalPrice = 0;
        for(const id in cart) {
            totalPrice += cart[id].quantity * cart[id].price;
        }
        Object.keys(cart).forEach(productid => {
            cartItems.push(<ShoppingContainer 
                productid={productid} 
                cart={cart} 
                subtractFromCart={this.props.subtractFromCart}/>)
        });
       
        // const handleClick = () => {
        //     this.props.buyCart()
        //       .then(() => {
        //             alert('Get scammed bozo')
        //         });
            // alert here
            
        // }
        return(
            <div id='shoppingcart'>
                <h2>Cart</h2>
                {cartItems}
                <h4>Total Price: ${totalPrice}</h4>
                <button className='purchaseButton' onClick={this.props.buyCart}>Purchase!</button> 
            </div>

        )
    }
}

export default Shoppingcart; 