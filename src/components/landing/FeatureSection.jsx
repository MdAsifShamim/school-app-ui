import { Typography } from "@mui/material";
import React from "react";
import LandingCard1 from "../Card/LandingCard1";
const FeatureSection = () => {
  const styles = {
    typographyStyle1: {
      display: "flex",
      fontFamily: "Sans-serif",
      justifyContent: "center",
    },
    typographyStyle2: {
      display: "flex",
      fontFamily: "Sans-serif",
      justifyContent: "center",
    },
    typographyStyle3: {
      display: "flex",
      fontFamily: "Sans-serif",
      justifyContent: "center",
    },
    cardStyle1: {
      display: "flex",
      fontFamily: "Sans-serif",
      justifyContent: "space-evenly",
    },
  };
  return (
    <section>
      <Typography
        style={styles.typographyStyle1}
        sx={{ fontSize: 20, paddingBottom: 3 }}
      >
        Best Feature
      </Typography>
      <Typography
        style={styles.typographyStyle2}
        sx={{ fontSize: 30, fontWeight: 600 }}
      >
        Achieves Your Goals
      </Typography>
      <Typography
        style={styles.typographyStyle3}
        sx={{ fontSize: 30, fontWeight: 600, paddingBottom: 10 }}
      >
        With EMOS
      </Typography>
      <div style={styles.cardStyle1}>
        <LandingCard1
          title="School/College Management"
          content="Provding all type of eduction sector solution and reducing mannual orgnisation work."
          type="school"
        />
        <LandingCard1
          title="Teacher Access"
          content="Providng Access for all orginisation staff, and help to simplify there work."
          type="teacher"
        />

        <LandingCard1
          title="Student Access"
          content="Providng Access for all  Students, to see the syllabus,fee Structure,important notification and many more."
          type="student"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
