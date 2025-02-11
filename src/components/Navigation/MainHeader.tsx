import { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import ProfileImage from "./ProfileImage";

import "./MainHeader.css";

const MainHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header id="main-header">
      <div className="logo">
        <Logo />
      </div>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <NavItem label="MANIFESTO" to="/manifesto" onClick={closeMenu} />
          <NavItem label="HOW IT WORKS" to="/how-it-works" onClick={closeMenu} />
          <NavItem label="ARTIST" to="/artist" onClick={closeMenu} />
          <NavItem label="LABELS" to="/labels" onClick={closeMenu} />
          <NavItem label="TEAM" to="/team" onClick={closeMenu} />
          <NavItem label="CONTACT" to="/contact" onClick={closeMenu} />
        </ul>
      </nav>

      <div className="profile-img">
        <ProfileImage />
      </div>

      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
  );
};

export default MainHeader;
