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
            price: 115,
        };
        // console.log(info);

        if (cart?.length) {
            setCart([...cart, info]);
            return;
        }
        else {
            setCart([info]);
            return;
        }
        // console.log(newPlayer);
    };
    const handleBookmark = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            quantity: 1,
            bookmark: "true",
        };
        const bookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(bookmark);
        if (oldBookmark) {
            const isExist = oldBookmark.find(p => p.idPlayer === idPlayer);
            if (isExist) {
                const updateQuantity = isExist.quantity + 1;
                isExist.quantity = updateQuantity;
                localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
            }
            else {
                localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
            }
        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info]));
        }

        // const prevBookmark = localStorage.getItem("bookmark");
        // const oldBookmark = JSON.parse(prevBookmark);
        // if (oldBookmark) {
        //     const isExist = oldBookmark.find(p => p.idPlayer === idPlayer);
        //     if (isExist) {
        //         alert("Already bookmarked");
        //         return;
        //     }
        //     else {
        //         localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
        //     }
        // }
        // else {
        //     localStorage.setItem("bookmark", JSON.stringify([info]));
        //     console.log('nai')
        // }
    };

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
                <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
            </p>

        </div>
    );
};

export default SInglePlayer;