import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    // console.log(search);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data?.player)
            })
    }, [search]);
    // console.log(players);
    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)}
                    type="text" className='search-input' />
                <button className='search-btn'>Search</button>
                <div className="players-container">
                    <Players players={players}
                        cart={cart}
                        setCart={setCart}
                    ></Players>
                </div>
            </div>
            <div className="right-side">
                <div className="cart">
                    <p>This is cart</p>
                </div>
            </div>
        </div>
    );
};


export default Home; <h2>Iam home</h2>