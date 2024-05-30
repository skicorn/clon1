
import '../Dashboard/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';

//fake data
const arr = [
    {
        id: 1,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    },
    {
        id: 2,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    }, {
        id: 3,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    }, {
        id: 4,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    }, {
        id: 5,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    }, {
        id: 6,
        name: 'paracetamol',
        expire: '1-1-1',
        stock: 0
    }
]
// function CreateTable(array) {
//     const tbody = document.querySelector("#context");
//     array.forEach(element => {
//         if(element.stock === 0 ){
//             const row = document.createElement('tr');
//             row.innerHTML = `
//             <td>${element.id}</td>
//             <td>${element.name}</td>
//             <td>${element.expire}</td>
//             `;
//             tbody.appendChild(row)
//         }
//     });
// }
// CreateTable(arr);

function Dashboard() {
    useEffect(() => {
        setOutofStock(arr.filter(item=> item.stock === 0));
        document.title = "Dashboard"
    })
    const [outofStock, setOutofStock] = useState([]);
    return (
        <React.Fragment>
            <h2>DASHBOARD</h2>
            <div className='Dashboard_content'>
                <div className='minireport'>
                    <div className='minireport_title'>Today's Order</div>
                    <div className='minireport_context'>10</div>
                </div>
                <div className='minireport'>
                    <div className='minireport_title'>Today's Income</div>
                    <div className='minireport_context'>10</div>
                </div>
                <div className='minireport'>
                    <div className='minireport_title'>New customer</div>
                    <div className='minireport_context'>10</div>
                </div>
            </div>
            <div className='largereport'>
                <div className='largereport_item'>
                    <div className='largereport_title'>Out of stock</div>
                    <div className='largereport_context'>
                        <table class="table table-success table-striped">
                            <thead>
                                <tr >
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Expire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {outofStock.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.expire}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Dashboard;