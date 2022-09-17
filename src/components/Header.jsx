import React from 'react';
import logo from "../images/card-logo.svg";

export default function Header() {
    return (
        <div className="header">
        <div className="card card-front">
          <img id="logo" src={logo} alt="card logo"></img>
          <h1>0000 0000 0000 0000</h1>
          <div className="cardP">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
        <div className="card card-back"></div>
      </div>
    )
}