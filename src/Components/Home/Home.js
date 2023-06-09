import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
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

    const handleDelete = (id) => {
        // console.log(id);
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
        setCart(leftPlayer);
        toast("Wow delete from cart!!!");
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)}
                    type="text" className='search-input' />
                <button className='search-btn'>Search</button>
                <div className="players-container">
                    <Players players={players}
                        key={players.idPlayer}
                        cart={cart}
                        setCart={setCart}
                    ></Players>
                </div>
            </div>
            <div className="right-side">
                <div className="cart">
                    <p>This is cart: {cart.length}</p>
                    {cart?.map(p => (
                        <div className='cart-info-container'>
                            <li>{p.strPlayer}</li>
                            <button onClick={() => handleDelete(p.idPlayer)}
                                className='delete-btn'>X
                            </button>
                        </div>))}
                </div>
            </div>
        </div>
    );
};



export default Home; <h2>Iam home</h2>