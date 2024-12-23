import React from 'react';
import './Offers.css';
import new_collection_banner from '../Assets/new_collection_banner.png';

const Offers = () => {
  return (
    <div className='offers'>    
        <img src={new_collection_banner} alt="New Collection Banner" />
    </div>
  )
}

export default Offers;