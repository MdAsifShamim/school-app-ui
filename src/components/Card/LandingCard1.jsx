import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import Teacher from "@mui/icons-material/AutoStories";
import Student from "@mui/icons-material/Transcribe";
import { pink } from "@mui/material/colors";
const LandingCard1 = (props) => {
  const styles = {
    typographyStyleCommon: {
      display: "flex",
      fontFamily: "Sans-serif",
      paddingLeft: 10,
      // paddingTop: 5,
    },
  };
  const title = props.title;
  const content = props.content;
  let logo = "";
  let borderColor = "";
  if (props.type === "school") {
    logo = <SchoolIcon sx={{ color: "#C14F37", fontSize: 30 }} />;
    borderColor = "#C14F37";
  } else if (props.type === "teacher") {
    logo = <Teacher sx={{ color: "#2986CC" }} />;
    borderColor = "#2986CC";
  } else {
    logo = <Student sx={{ color: "#FFF87C" }} />;
    borderColor = "#FFF87C";
  }
  return (
    <section>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 300,
          maxHeight: 250,
          minHeight: 250,
          marginBottom: 20,
          border: 1,
          borderColor: { borderColor },

          ":hover": {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <CardContent>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 5,
              paddingBottom: 1,
            }}
          >
            {logo}
          </Grid>

          <Typography
            sx={{
              fontSize: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontFamily: "Sans-serif",
              fontWeight: 600,
              paddingBottom: 2,
              paddingTop: 3,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontFamily: "Sans-serif",
              fontWeight: 400,
              paddingBottom: 2,
            }}
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};
export default LandingCard1;
