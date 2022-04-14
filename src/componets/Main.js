import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Loding from './Loading/Loding';

const HomeWithLoading = Loding(Home);

function Main(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const userData = [
        {
          name: "amit",
          age: 35,
          salary: 40000,
          bonus: 1000,
          status: true
        },
        {
          name: "ajay",
          age: 25,
          salary: 38000,
          bonus: 2000,
          status: false
        },
        {
          name: "mayur",
          age: 23,
          salary: 50000,
          bonus: 500,
          status: true
        },
        {
          name: "jay",
          age: 29,
          salary: 35000,
          bonus: 600,
          status: true
        },
        {
          name: "raj",
          age: 33,
          salary: 22000,
          bonus: 2000,
          status: true
        },
      ]

    useEffect(
        () => {
            setLoading(true);
            setTimeout(() => { setLoading(false); setData(userData) }, 3000)
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