
import React from 'react';
import './Sidebar.css'

import dashboard from '../assets/dashboard.svg'
import order from '../assets/order.svg'
import medicine from '../assets/medicine.svg'
import staff from '../assets/staff.svg'
import voucher from '../assets/voucher.svg'
import setting from '../assets/setting.svg'
import logout from '../assets/logout.svg'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="List">
                <li className="List-item" >
                    <Link to='/dashboard' className='item-link'>
                        <div className="item-container">
                            <img src={dashboard} className="List-item-img" />
                            Dashboard
                        </div>
                    </Link>
                </li>
                <li className="List-item">
                    <Link to='/orders' className='item-link'>
                        <div className="item-container">
                            <img src={order} className="List-item-img" />
                            Order
                        </div>
                    </Link>
                </li>
                <li className="List-item">
                    <Link to='/medicines' className='item-link'>
                        <div className="item-container">
                            <img src={medicine} className="List-item-img" />
                            Medicine
                        </div>
                    </Link>
                </li>
                <li className="List-item">
                    <Link to='/customers' className='item-link'>
                        <div className="item-container">
                            <img src={staff} className="List-item-img" />
                            Customers
                        </div>
                    </Link>
                </li>
                <li className="List-item">
                    <Link to='/staffs' className='item-link'>
                        <div className="item-container">
                            <img src={staff} className="List-item-img" />
                            Staffs
                        </div>
                    </Link>
                </li>
                <li className="List-item" >
                    <div className="item-container">
                        <img src={voucher} className="List-item-img" />
                        Voucher
                    </div>
                </li>
                <li className="List-item">
                    <Link to="/settings" className='item-link'>
                        <div className="item-container">
                            <img src={setting} className="List-item-img" />
                            Setting
                        </div>
                    </Link>
                </li>
                <li className="List-item">
                    <div className="item-container1">
                        <img src={logout} className="List-item-img" />
                        Log out
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
