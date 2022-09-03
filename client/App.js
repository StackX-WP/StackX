import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Adidas from './components/brands/Adidas';
import Nike from './components/brands/Nike';
import Jordan from './components/brands/Jordan';
import Newbalance from './components/brands/Newbalance';
import Balenciaga from './components/brands/Balenciaga';
import Shoppingcart from './components/Shoppingcart';

import styles from './styles/styles.scss'

const App = () => {
    return(
        <BrowserRouter>
             <nav>
                <Link className='headers' to="/">Home</Link>
                <Link className='headers' to="/adidas">Adidas</Link>
                <Link className='headers' to="/nike">Nike</Link>
                <Link className='headers' to="/jordan">Jordan</Link>
                <Link className='headers' to="/newbalance">New Balance</Link>
                <Link className='headers' to="/balenciaga">Balenciaga</Link>
                <Link className='headers' to="/shoppingcart">Cart</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/adidas" element={<Adidas />}></Route>
                <Route path="/nike" element={<Nike />}></Route>
                <Route path="/jordan" element={<Jordan />}></Route>
                <Route path="/newbalance" element={<Newbalance />}></Route>
                <Route path="/balenciaga" element={<Balenciaga />}></Route>
                <Route path="/shoppingcart" element={<Shoppingcart />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App; 