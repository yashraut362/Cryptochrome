import React, { useContext, useState } from 'react';
import { CurrecyContext } from '../contexts/currencycontext';
import Coins from '../components/coins'
const Addcrypto = () => {
    const { coins, isloading, array, setarray } = useContext(CurrecyContext);
    const [search, setsearch] = useState('');


    const handlechange = (e) => {
        setsearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <section className="section has-background-dark">
            <div className="container">
                <div class="field">
                    <div className="columns">
                        <div className="column">
                        </div>
                    </div>
                    <div class="control mx-4">
                        <input class="input is-black" type="text" placeholder="Primary input" onChange={handlechange} />

                    </div>
                    {filteredCoins.map(coin => {
                        return (
                            <Coins array={array} setarray={setarray} key={coin.id} id={coin.id} name={coin.name} image={coin.image} price={coin.current_price} />
                        )
                    })}
                    <p className="is-size-4 has-text-light has-text-centered">Loading ....</p>
                </div>
            </div>
        </section>
    );
}

export default Addcrypto;