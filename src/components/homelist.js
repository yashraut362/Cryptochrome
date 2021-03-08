import react, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css'
import axios from 'axios';

const HomeList = ({ array }) => {
    const [localdata, setlocaldata] = useState();
    useEffect(() => {
        array.map(arr => {
            axios.get('https://api.coingecko.com/api/v3/coins/' + arr.id).then(res => {
                // localStorage.setItem('coins', JSON.stringify(res.data))
                setlocaldata(JSON.stringify(res.data))
            }).catch(err => alert(err))
        })

    }, [array]);

    // useEffect(() => {
    //     localStorage.setItem('coins', JSON.stringify(allcoins))
    // }, [allcoins]);



    return (
        <section section className="section" >
            <div className="container " >
                {console.log(localdata[0])}
            </div>
        </section >
    );
}

export default HomeList;



{/* useEffect(() => {
        array.map(arr => {
            axios.get('https://api.coingecko.com/api/v3/coins/' + arr.id).then(res => {
                setallcoins(res.data)
            }).catch(err => alert(err))
        })
        console.log(array, 'array value')
        console.log(allcoins, 'allcoins value')
    }, [array]); */}



{/* 
array.map(arr => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${arr.id}`).then(res => {
        setallcoins([...allcoins, {
            id: res.data.id,
            image: res.data.image.small,
        }])
    })
}
)
console.log(allcoins, 'allcoins val') */}
