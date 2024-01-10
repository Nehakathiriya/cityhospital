import React from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header({ favorites, cart }) {
  let cartCount = cart.reduce((acc, v) => acc + v.quantity, 0);
  return (
    <div className="main-header">
      <header id="header" className="fixed-top">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
              <NavLink to="/mywishlist">
                <Badge badgeContent={favorites.length} color="primary">
                  <FavoriteIcon color="action" />
                </Badge>
              </NavLink>
              <NavLink to="/addtocart">
                <Badge badgeContent={cartCount} color="primary">
                  <AddShoppingCartIcon color="action" />
                </Badge>
              </NavLink>
            </div>


          </div>
        </div>
        <div className="container d-flex align-items-center">
          <div className="logo">
            <NavLink href="/">
              <h1 className="logo me-auto">City</h1>
              <br />
              <h2 className="logo-tiny-text me-auto">
                Multispeciality Hospital
              </h2>
            </NavLink>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./department">
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./doctor">
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto " to="./about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./medicine">
                  Medicine
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link scrollto" to="./counter">
                  Counter
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <NavLink to="./appoinment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Make an</span>
            Appointment
          </NavLink>
          <NavLink to="./login" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Login/ Signup</span>
          </NavLink>


        </div>
      </header>
    </div>
  );
}

export default Header;
