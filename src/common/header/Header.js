import React from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component{
    render(){
        return<div className ='header'>
            <img src={logo} className='headerLogo' alt='Logo'/>
        </div>

    }
}

export default Header;