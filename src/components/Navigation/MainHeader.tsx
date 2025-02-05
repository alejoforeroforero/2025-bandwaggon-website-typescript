import Logo from "./Logo";
import NavItem from "./NavItem";
import ProfileImage from "./ProfileImage";

import './MainHeader.css';

const MainHeader = () => {
  return (
    <header id="main-header">
      <Logo />
      <nav>
        <ul>
          <NavItem label="MANIFESTO" to="/manifesto" />
          <NavItem label="HOW IT WORKS" to="/how-it-works" />
          <NavItem label="ARTIST" to="/artist" />
          <NavItem label="LABELS" to="/labels" />
          <NavItem label="TEAM" to="/team" />
          <NavItem label="CONTACT" to="/contact" />
        </ul>
      </nav>
      <ProfileImage />
    </header>
  );
};

export default MainHeader;
