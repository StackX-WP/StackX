import React, { render, Component } from 'react'; 
import ShoeDisplay from './ShoeDisplay';

class ShoesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        }
    }

    componentDidMount() {
      // make a fetch request to the api for shoes in this.props.brand
      const newShoes = []
      fetch(`/api/brands/${this.props.brand}`)
        .then(res => res.json())
        .then(data => {
          data.forEach(shoe => {
            newShoes.push(shoe)
          });
          this.setState({shoes: newShoes})
        })
    }

    render() {
      const displays = [];
      this.state.shoes.forEach(shoe => {
        displays.push(<ShoeDisplay shoe={shoe} pictures={this.props.pictures} addToCart={this.props.addToCart}/>)
        // console.log(displays);
      })
      return(
        <div className='Brandcontainers'>
          {displays}
        </div>
      )
    }
}


export default ShoesContainer;