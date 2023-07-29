import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../logo/abc.png" alt="Logo" />
      </div>
      <div>
        <ul className="navbar_list">
          <li>
            <b>MENU</b>
          </li>
          <li>
            <b>LOCATION</b>
          </li>
          <li>
            <b>ABOUT</b>
          </li>
          <li>
            <b>CONTACT</b>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
