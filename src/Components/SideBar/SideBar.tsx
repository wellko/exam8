import React from 'react';
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="col-auto px-0">
            <div id="sidebar" className="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/' className="nav-link">All</NavLink>
                    </li>
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/quotes/Wisdom' className="nav-link">Wisdom</NavLink>
                    </li>
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/quotes/Attitude' className="nav-link">Attitude</NavLink>
                    </li>
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/quotes/Love' className="nav-link">Love</NavLink>
                    </li>
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/quotes/Time' className="nav-link">Time</NavLink>
                    </li>
                    <li className="nav-item list-group-item border-end-0 d-inline-block text-truncate">
                        <NavLink to='/quotes/Success' className="nav-link">Success</NavLink>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default SideBar;