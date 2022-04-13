import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Loding from './Loading/Loding';

const HomeWithLoading = Loding(Home);

function Main(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const userData = [
        {
            id: 101,
            name: 'Ajay'
        },
        {
            id: 102,
            name: 'Amit'
        }
    ]

    useEffect(
        () => {
            setLoading(true);
            setTimeout(() => { setLoading(false); setData(userData) }, 2000)
        },
        [])


    return (
        <div>
            <HomeWithLoading
                isLoading={loading}
                data={data}
            />
        </div>
    );
}

export default Main;