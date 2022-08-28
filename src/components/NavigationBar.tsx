import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar bg-base-100 shadow px-40">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          SimpleApp
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home Page</Link>
          </li>{" "}
          <li>
            <Link to={"/contact"}>Contact Page</Link>
          </li>{" "}
          <li>
            <Link to={"/info"}>Information Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
