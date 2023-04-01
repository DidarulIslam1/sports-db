import React from 'react';
import './SInglePlayer.css'

const SInglePlayer = ({ player, cart, setCart }) => {
    // console.log(player);
    const { strThumb, idPlayer, strCutout, strPlayer, strNationality, strDescriptionEN } = player;

    const handleAddToCart = () => {
        // console.log('hi');
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price: "115",
        };
        if (cart) {
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
        // console.log(newPlayer);
    };
    // console.log(cart);

    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h3>Player Name: {strPlayer}</h3>
            <h5>Nationality: {strNationality}</h5>
            <p>Description: {strDescriptionEN ?
                strDescriptionEN?.slice(0, 20) : "Lorem"
            } </p>
            <p className='btn-p'>
                <button className='card-btn'>Details</button>
                <button onClick={handleAddToCart} className='card-btn'>Add To Cart</button>
                <button className='card-btn'>Bookmark</button>
            </p>

        </div>
    );
};

export default SInglePlayer;