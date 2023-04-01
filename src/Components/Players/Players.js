import React from 'react';
import SInglePlayer from '../SinglePlayer/SInglePlayer';
import './Players.css';

const Players = ({ players, cart, setCart }) => {
    console.log(players);
    return (
        <div>
            <div className="cart-container">
                {
                    players.map(pd => <SInglePlayer player={pd}
                        key={pd?.idPlayer}
                        cart={cart}
                        setCart={setCart}
                    ></SInglePlayer>)
                }
            </div>
        </div>
    );
};

export default Players;