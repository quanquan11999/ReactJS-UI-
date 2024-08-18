import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../../Components/Header/Header.css';

import About from "../About/About";


class Header extends Component {
  render() {
    return <div>
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <a className="navbar-brand" href="/">
        Decor Tech<span>.</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="nav-link" >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link" >
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link to="/Services" className="nav-link" >
              Dịch vụ
            </Link>
          </li>
          <li>
            <Link to="/Blog" className="nav-link" >
              Tin tức
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link" >
              Liên hệ
            </Link>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <Link to="/Login" className="nav-link" href="#">
              <img src="images/user.svg" />
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="nav-link" >
              <img src="images/cart.svg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  </div>;
  }
}


export default Header;
