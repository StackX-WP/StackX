import React from 'react';
import { render, Component } from 'react';
import images from '../data';
import ShoesContainer from '../containers/ShoesContainer'

class BrandPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('brand:', this.props.brand)
        return(
            <div className='brandpg'>
                <div id='banner'>
                    <img src={this.props.bannersrc}/>
                </div>
                <div id='brandbody'>
                    <ShoesContainer brand={this.props.brand} 
                    pictures={images[this.props.brand]} 
                    addToCart={this.props.addToCart} />
                </div>
            </div>
        )
    }
}

export default BrandPage; 