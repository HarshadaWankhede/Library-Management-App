import React from 'react';
import "../assets/styles/navbar.css";
import { NavLink, useLocation, Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const bool = location.pathname.startsWith(`/adminportal`);

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Book Logo" />
        <span>My Library</span>
      </div>

      {bool ? (
        <>
          <ul className='nav-links'>
            <li><Link to="/adminportal">Home</Link></li>
            <li><NavLink to="/adminportal/books">Books</NavLink></li>
            <li><NavLink to="/adminportal/addbooks">Add Books</NavLink></li>
            <li><NavLink to="/adminportal/user">Users</NavLink></li>
            <li><NavLink to="/adminportal/addusers" >Add User</NavLink></li>
          </ul>
          <NavLink to="/" className="logout">Logout</NavLink>
        </>
      ) : (
        <>
          <ul className='nav-links'>
            <li><Link to="/userportal">Home</Link></li>
            <li><NavLink to="/userportal/books">Books</NavLink></li>
            <li><NavLink to="/userportal/cart">Cart</NavLink></li>
            <li><NavLink to="/userportal/user">Users</NavLink></li>
          </ul>
          <NavLink to="/" className="logout">Logout</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
