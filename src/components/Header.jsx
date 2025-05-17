import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='space-x-4 text-center py-2 text-2xl'>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/addCoffee'}> AddCoffee </NavLink>
            <NavLink to={'/signin'}> Login </NavLink>
            <NavLink to={'/register'}> SignUp </NavLink>
        </div>
    );
};

export default Header;