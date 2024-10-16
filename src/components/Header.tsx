import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee, Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#d7c0ae] p-4">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <Coffee className="w-8 h-8 mr-2" />
          <span className="text-sm font-semibold md:text-2xl">
            Home Thrown Pottery
          </span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>
        <nav className={`${isOpen ? "fixed top-0 left-0 w-full h-full bg-[#d7c0ae] z-10" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/" className="hover:text-[#8c7a6b]" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#8c7a6b]" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#8c7a6b]" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#8c7a6b]" onClick={handleLinkClick}>
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
