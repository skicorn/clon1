import logo from '../../assets/dashboard.svg'
import React, { useEffect } from 'react';

function Dashboard(){
    useEffect(()=>{
        document.title="Dashboard"
    })
    return(
        <div>
            <img src={logo}/>
            <h1>This is dashboard</h1>
        </div>
    )
}
export default Dashboard;