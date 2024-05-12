import { Button, Card, CardContent /* , Typography */ } from "@mui/material";
import React from "react";
import "./UserCard.css";
const UserCard = (props) => {
  return (
    <section className="user-card">
      <Card
        sx={{
          height: 170,
          width: 170,
          backgroundColor: "#F0DCD7",
          ":hover": {
            boxShadow: 20,
            background: "#685044",
            color: "white",
          },
        }}
        variant="outlined"
        className="user_card_content"
      >
        <CardContent sx={{ paddingTop: 5 }}>
          {/* <Typography
            sx={{ color: "black", alignContent: "center", paddingLeft: 0 }}
          >
            {props.accessLabel}
          </Typography> */}
          <Button
            sx={{
              alignContent: "center",
              color: "black",
              ":hover": {
                color: "white",
              },
            }}
          >
            {props.accessLabel} Login
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default UserCard;
