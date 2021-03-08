import React, { useContext } from 'react';
import EmptyList from '../components/emptylist';
import { CurrecyContext } from '../contexts/currencycontext';
import HomeList from '../components/homelist';

const Home = () => {
    const { array, setarray } = useContext(CurrecyContext);
    if (array.length >= 1) {
        return (<HomeList array={array} />);
    } else {
        return (
            <EmptyList />
        );
    }

}

export default Home;