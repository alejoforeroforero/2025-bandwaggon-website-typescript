import { NavLink } from "react-router-dom";

type NavInfo = {
  label: string;
  to:string
};

const NavItem = ({ label, to }: NavInfo) => {
  return (
    <li>
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
