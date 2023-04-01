import React from 'react';
import './SInglePlayer.css'

const SInglePlayer = ({ player, cart, setCart }) => {
    console.log(player);
    const { strThumb, strPlayer, strNationality, strDescriptionEN } = player;
    return (
        <div className='card'>
            <img src={strThumb} alt="" />
            <h3>Player Name: {strPlayer}</h3>
            <h5>Nationality: {strNationality}</h5>
            <p>Description: {strDescriptionEN ?
                strDescriptionEN?.slice(0, 20) : "Lorem"
            } </p>
            <p className='btn-p'>
                <button className='card-btn'>Details</button>
                <button className='card-btn'>Add To Cart</button>
                <button className='card-btn'>Bookmark</button>
            </p>

        </div>
    );
};

export default SInglePlayer;