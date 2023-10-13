import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <Link href="/">
        <a className="navbar-brand">My Blog</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleDropdownToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              onClick={handleDropdownToggle}
            >
              Blogs
            </a>
            <div className="dropdown-menu">
              <Link href="/blogs/blog1">
                <a className="dropdown-item">Blog 1</a>
              </Link>
              <Link href="/blogs/blog2">
                <a className="dropdown-item">Blog 2</a>
              </Link>
              <Link href="/blogs/blog3">
                <a className="dropdown-item">Blog 3</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Navbar;
