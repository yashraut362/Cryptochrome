import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CurrecyContext = createContext();

const CurrencyProvider = (props) => {
    const [coins, setcoins] = useState([]);
    const [array, setarray] = useState([]);


    const uri = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10000&page=1&sparkline=false'

    useEffect(() => {
        axios.get(uri).then(res => {
            setcoins(res.data)
        }).catch(err => alert(err))
    }, [])

    return (
        <CurrecyContext.Provider value={{ coins, array, setarray }}>
            {props.children}
        </CurrecyContext.Provider>
    );
}

export default CurrencyProvider;
