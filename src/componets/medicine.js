import React from 'react';

function Medicine() {
    let medicine_data =[ 
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];

    let filter_data = medicine_data.filter((d, i) => (d.expiry > 2021 && d.price > 200));
  
    let total = filter_data.reduce((acc, d) => (acc + d.price), 0)
  
    console.log(filter_data.length)
  
    return ( 
      <table>
        <tr>
          <h2>Mediacine Data Use Filter Reduce</h2>
        </tr>
        <tr>
              <th> Name </th> 
              <th> Quantity </th> 
              <th> Price </th> 
              <th> Expiry </th> 
              <th> Status </th> 
              <th> Total </th> 
            </tr>
             {
        
        filter_data.map((d, i) => {
          return ( 
          <>
            
            <tr>
              <td> {d.name}</td>
              <td> {d.quantity}</td>
              <td> {d.price}</td>
              <td> {d.expiry}</td> 
              <td> {d.status.toString()}</td> 
              { i === 0 ? <td rowspan = {filter_data.length}>{total}</td> : null }
            </tr>
          </>
          );
        })
      } 
      </table>
    );
  }

    export default Medicine;