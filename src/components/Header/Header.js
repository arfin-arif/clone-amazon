import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContex';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const { logOut } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                <Link to="/inventory">Inventory</Link>
                {user?.uid ?
                    <button className='btn-logout' onClick={logOut}>Log Out</button>
                    :
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>}


            </div>
        </nav>

    );
};

export default Header;