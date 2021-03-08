import React, { useEffect, useState } from 'react';

const Coins = ({ name, price, image, id, array, setarray }) => {

    const handleclick = () => {
        setarray([...array, { id }])
        setDisabled(true)
        setbutton('Added')
    }
    const [disabled, setDisabled] = useState(false);
    const [button, setbutton] = useState("Add");


    return (
        <div class="card mt-2 has-background-black">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src={image} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5 has-text-white">{name}</p>
                        <p class=" is-primary has-text-weight-bold  subtitle is-6 has-text-white">{'₹ ' + price}</p>
                    </div>
                    <div class="media-right">
                        <div class="buttons">
                            <button class="button is-normal is-white" disabled={disabled} onClick={handleclick}>{button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );


}

export default Coins;