import { NavLink } from "react-router-dom";

type NavInfo = {
  label: string;
  to:string;
  onClick?: () => void;
};

const NavItem = ({ label, to, onClick }: NavInfo) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
