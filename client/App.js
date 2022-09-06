import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Adidas from './components/brands/Adidas';
import Balenciaga from './components/brands/Balenciaga';
import Jordan from './components/brands/Jordan';
import NewBalance from './components/brands/NewBalance';
import Nike from './components/brands/Nike';
import Shoppingcart from './components/Shoppingcart';

import styles from './styles/styles.scss'
class App extends Component {
    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this);
        this.subtractFromCart = this.subtractFromCart.bind(this);
        this.state = {
            cart: {}
        }
    }

    addToCart(id) {
        console.log('running add to cart from', id);
        const newCart = {...this.state.cart};
        if (!this.state.cart[id]) {
            newCart[id] = 1;
        } else {
            newCart[id] += 1;
        } 
        this.setState({cart: newCart});
    }

    subtractFromCart(id) {
        console.log('running subtract from cart from', id);
        const newCart = {...this.state.cart};
        if (this.state.cart[id] === 1) {
            delete newCart[id]
        } else {
            newCart[id] -= 1;
        } 
        this.setState({cart: newCart});
    }

    render() {
        return(
            <BrowserRouter>
                <navbar>
                    <div className='left'>
                        <Link id='headers' style={{color: 'black'}} to="/">OCTOSHOES</Link>
                        <Link id='headers' to="/adidas">Adidas</Link>
                        <Link id='headers' to="/nike">Nike</Link>
                        <Link id='headers' to="/jordan">Jordan</Link>
                        <Link id='headers' to="/newbalance">New Balance</Link>
                        <Link id='headers' to="/balenciaga">Balenciaga</Link>
                    </div>
                    <div className='right'>
                        <Link id='headers' to="/shoppingcart">Cart ({Object.keys(this.state.cart).length})</Link>
                    </div>
                </navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/adidas" element={<Adidas addToCart={this.addToCart}/>}></Route>
                    <Route path="/nike" element={<Nike addToCart={this.addToCart}/>}></Route>
                    <Route path="/jordan" element={<Jordan addToCart={this.addToCart}/>}></Route>
                    <Route path="/newbalance" element={<NewBalance addToCart={this.addToCart} />}></Route>
                    <Route path="/balenciaga" element={<Balenciaga addToCart={this.addToCart}/>}></Route>
                    <Route path="/shoppingcart" element={<Shoppingcart cart={this.state.cart} subtractFromCart={this.subtractFromCart}/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App; 