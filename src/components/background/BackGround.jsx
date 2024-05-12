import { Box } from "@mui/material";
import React from "react";
import backgroundImg from "../icons/background_img.jpg";
/* import LoginForm from "../login/LoginForm"; */
import "./BackGround.css";
import UserCard from "../Card/UserCard";
const BackGround = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <section className="card_design">
        <UserCard accessLabel="Admin" />
        <UserCard accessLabel="Teachers" />
        <UserCard accessLabel="Student" />
      </section>
    </Box>
  );
};

export default BackGround;
