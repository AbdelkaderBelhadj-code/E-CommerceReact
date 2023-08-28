import React from "react";
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"

function Header() {
  return (
    <header className="fixed shadow-lg w-full h-16 px-2 md:px-4">
      <div className="flex items-center h-full">
        <Link to={""}>
          <div className="h-12">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="">
            <nav>

            </nav>
            <div className="">
              <FaUserAlt />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
