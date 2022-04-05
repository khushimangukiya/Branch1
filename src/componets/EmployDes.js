import React from 'react';

function EmployeDes() {
    let data = [
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

    let filterdata = data.filter((d, i) => (d.salary > 22000 && d.bonus > 500))

    let total = filterdata.reduce((acc, d) => (acc + d.salary + d.bonus), 0)

    console.log(filterdata.length)

    return (
        <table>
            <tr>
                <h2>Employe Data Use Destructhering</h2>
            </tr>
            <tr>
                <th> Name </th>
                <th> Age </th>
                <th> Salary </th>
                <th> Bonus </th>
                <th> Status </th>
                <th> Sub Total</th>
                <th> Total </th>
            </tr>
            {
                filterdata.map((d, i) => {

                    let { name, age, salary, bonus, status } = d;
                    return (
                        <>
                            <tr>
                                <td> {name}</td>
                                <td> {age}</td>
                                <td> {salary}</td>
                                <td> {bonus}</td>
                                <td> {salary + bonus}</td>
                                <td> {status.toString()}</td>
                                {i === 0 ? <td rowspan={filterdata.length}>{total}</td> : null}
                            </tr>
                        </>
                    );
                })
            }
        </table>
    );
}

export default EmployeDes;