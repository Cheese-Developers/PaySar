import React from "react";
import { Link } from "react-router-dom";
import { useNavLink } from "../hooks/useNavLink";
import { useToken } from "../hooks/useToken";
import { useDisclosure } from "@mantine/hooks";
import Drawer from "./ui/Drawer";
import { FaBars } from "react-icons/fa6";
import Logout from "./Logout";
import NavbarLink from "./Navbar/NavbarLink";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <nav
      className={
        "h-16 md:h-24 text-secondary bg-primary/30 md:bg-primary backdrop-blur-lg sticky top-0 z-50"
      }
    >
      <div className="w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] mx-auto flex justify-between items-center h-full px-3 md:px-0">
        <h3 className="text-4xl font-bold font-curve">PaySar</h3>
        <div className="md:block hidden">
          <NavbarLink />
        </div>
        <div className="md:hidden block">
          <button className="outline-none" onClick={open}>
            <FaBars size={25} color="white" />
          </button>
          <Drawer opened={opened} close={close} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
