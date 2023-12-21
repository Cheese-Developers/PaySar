import React from "react";
import { NavLink } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import { useNavLink } from "../../hooks/useNavLink";
import Logout from "../Logout";
import "./navbar.css";

const NavbarLink = ({ close }) => {
  const { token } = useToken();
  const { links, authLinks } = useNavLink();

  return (
    <ul className="flex justify-center flex-col md:flex-row items-center gap-8">
      {token
        ? links.map((link) => (
            <li key={link.id} onClick={() => (close && close()) || {}}>
              <NavLink
                to={link.to}
                className="uppercase outline-none md:font-medium text-2xl font-semibold md:text-sm"
              >
                {link.name}
              </NavLink>
            </li>
          ))
        : authLinks.map((link) => (
            <li key={link.id} onClick={() => (close && close()) || {}}>
              <NavLink
                to={link.to}
                className="uppercase outline-none md:font-medium text-2xl font-semibold md:text-sm"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      <Logout close={close} />
    </ul>
  );
};

export default NavbarLink;
