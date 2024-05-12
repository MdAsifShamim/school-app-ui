import React from "react";
import { Typography } from "@mui/material";
import "./Header.css";
/* import { CiLogin } from "react-icons/ci"; */
const Header = () => {
  return (
    <section className="header-style">
      <Typography variant="inherit" className="header-typography">
        Educational Organizations Management System
      </Typography>
      {/*  <section className="header-icon-style">
                <CiLogin  size={30} />
            </section> */}
    </section>
  );
};

export default Header;
