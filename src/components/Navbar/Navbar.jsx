import React from "react";
import MyButton from "../ButtonComponent/ButtonComponent";

export default function Navbar() {
  const navbarMenuData = ["Home", "About", "Products", "Contacts"];

  return (
    <div className="navbar">
      <a className="navbar-logo" href="#">
        NAMANGANLIKLAR24
      </a>
      <ul className="navbar-menu">
        {navbarMenuData.map((item, index) => {
          return <li key={index}><img src="" alt="" /><a href=""></a>{item}</li>;
        })}
        <li>
          <MyButton>Login</MyButton>
        </li>
      </ul>
    </div>
  );
}
