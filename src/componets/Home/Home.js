import React from 'react';

function Home({data}) {
    return (
        <table className='employe_table'>
          <tr>
            <h2>Employe Data Use Filter Reduce</h2>
          </tr>
          <tr>
            <th> Name </th>
            <th> Age </th>
            <th> Salary </th>
            <th> Bonus </th>
            <th> Status </th>
          </tr>
          {
    
            data.map((d, i) => {
              return (
                <>
                  <tr>
                    <td> {d.name}</td>
                    <td> {d.age}</td>
                    <td> {d.salary}</td>
                    <td> {d.bonus}</td>
                    <td> {d.status.toString()}</td>
                  </tr>
                </>
              );
            })
          }
        </table>
      );
}

export default Home;