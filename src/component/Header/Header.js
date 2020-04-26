import React from 'react';
import logo from'../../images/logo.png'
import './Header.css'
//import { useAuth } from '../login/useAuth';


const Header = () => {
   //const auth = useAuth();
   //console.log(auth.user);
    return (
        <div className="header">
            <img src={logo}  alt=""/>
            <nav>
                <a href="shop">Home</a>
                <a href="review">Order Review</a>
                <a href="manage">Manage InvenTory</a>
                <a href="login"> login </a>
               
            </nav>
        </div>
    );
};

export default Header;