import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
const Navbar = () => {

    return (
        <nav>
            <NavLink exact className="navlink navul" activeClassName="active" to="/"  >Currency Converter</NavLink>
            <NavLink className="navul" activeClassName="active" to="/current-exchange-rates" >Currency Exchange Rates</NavLink>
        </nav>
    );
}

export default Navbar;