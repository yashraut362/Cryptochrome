import react from 'react';
import 'bulma/css/bulma.css'

const EmptyList = () => {
    return (
        <section className="section ">
            <div className="container">
                <p className=" is-size-3 has-text-centered has-text-black">Watchlist is empty🙃</p>
                <br />
                <p className="is-size-3 has-text-centered has-text-black">Please Click on Add Crpto</p>
            </div >
        </section>

    );
}

export default EmptyList;