import React from "react";
import BannerImg from "../icons/banner2.jpg";
import { Typography, Button } from "@mui/material";
const Banner = () => {
  const styles = {
    typographyStyleCommon: {
      display: "flex",
      fontFamily: "Sans-serif",
      paddingLeft: 10,
      // paddingTop: 5,
    },
    typographyStyleFor1: {
      display: "flex",
      fontFamily: "Sans-serif",
      paddingLeft: 80,
      paddingTop: 40,
      fontSize: 40,
      fontWeight: 800,
    },
    typographyStyleFor2: {
      display: "flex",
      fontFamily: "Sans-serif",
      paddingLeft: 80,
      paddingTop: 10,
      fontSize: 40,
      fontWeight: 800,
    },
    typographyStyleFor3: {
      display: "flex",
      fontFamily: "Sans-serif",
      paddingLeft: 80,
      paddingTop: 10,
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: ".2rem",
    },
    buttonStyle: {
      display: "flex",
    },
  };
  return (
    <section
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 600,
        width: 1520,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography style={styles.typographyStyleFor1} sx={{}}>
        Education is the
      </Typography>
      <Typography style={styles.typographyStyleFor2} sx={{}}>
        movement from darkness
      </Typography>
      <Typography style={styles.typographyStyleFor3} sx={{}}>
        to light.
      </Typography>
      <Button
        /* style={styles.buttonStyle } */ sx={{
          backgroundColor: "#685044",
          display: "flex",
          height: 60,
          width: 180,
          color: "white",
          marginLeft: 10,
          marginTop: 10,
          borderRadius: 8,
          ":hover": {
            bgcolor: "#685044",
            color: "white",
          },
        }}
      >
        Contact Now
      </Button>
    </section>
  );
};
export default Banner;
