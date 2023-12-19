import React from "react";
import { Drawer as MantineDrawer } from "@mantine/core";
import "./ui.css";
import { RxCross2 } from "react-icons/rx";
import NavbarLink from "../Navbar/NavbarLink";

const Drawer = ({ opened, close }) => {
  return (
    <MantineDrawer
      opened={opened}
      onClose={close}
      size={"xs"}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      position="right"
      withCloseButton={false}
    >
      <div className="text-secondary px-3 flex justify-between header fixed top-6 w-[95%]">
        <h3 className="text-3xl font-curve font-semibold text-primary">
          PaySar
        </h3>
        <button className="outline-none" onClick={() => close()}>
          <RxCross2 size={24} color="white" strokeWidth={0.6} />
        </button>
      </div>
      <div className="body text-secondary flex justify-center items-center h-full">
        <NavbarLink close={close} />
      </div>
    </MantineDrawer>
  );
};

export default Drawer;
