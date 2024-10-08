import React from "react";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#d7c0ae] p-4">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <Coffee className="w-8 h-8 mr-2" />
          <span className="text-sm font-semibold md:text-2xl">
            Home Thrown Pottery
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-[#8c7a6b]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#8c7a6b]">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#8c7a6b]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#8c7a6b]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
