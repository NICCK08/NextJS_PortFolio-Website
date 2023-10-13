import { useState } from 'react';
import Link from 'next/link';
import "styles/dropdownmenu.css"

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={handleDropdownToggle}>
        Blogs
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="https://dev.to/nicck08/vs-code-extensions-and-common-shortcuts-for-web-designers-3mm4">Vs Code Shortcuts</a>
          <a href="https://dev.to/nicck08/websites-every-programmer-should-know-28k3">Common Webistes</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
