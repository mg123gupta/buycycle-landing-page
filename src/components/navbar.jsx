import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">CycleBuy</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}