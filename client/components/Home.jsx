import React from 'react';
import { categories } from './data';

const Home = () => {
    return(
        <div>
            <div className='homeImage'>
                <img src="https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/21844/Mylo-Stan-Smith-adidas-Bolt-Threads-shoes-classics-sneakers-sustainability-circular-fashion-1440x9999.jpg"/>
                <p>OCTOSHOES</p> 
            </div>
            <p style={{justifyContent: 'center'}}>(def not fake shoes...)</p>
            <div className='homeAds'>
                {categories.map((item) => (
                    <div> 
                        <img src={item.img}></img>
                    </div>
                ))}
            </div>
        </div>
        
       
    );
}

export default Home; 