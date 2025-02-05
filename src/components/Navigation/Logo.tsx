import { NavLink } from "react-router-dom";
import logoHeader from "@/assets/logo-header.png";

const Logo = () => {
  return (
    <NavLink to="/" className="logo" end>
      <img src={logoHeader} alt="logo-header" />
    </NavLink>
  );
};

export default Logo;
