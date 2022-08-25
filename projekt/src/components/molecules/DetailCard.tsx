import React from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import DeleteButton from "../atoms/DeleteButton";
import UpdateButton from "../atoms/UpdateButton";
function DetailCard() {
  const cardstyle = {
    display: "block",
    width: "22vw",
  };
  return (
    <div>
      <Card style={cardstyle}>
        <CardContent>id</CardContent>
        <CardContent>name</CardContent>
        <CardContent>jahr</CardContent>
        <CardActions>
          <DeleteButton></DeleteButton>
          <UpdateButton></UpdateButton>


        </CardActions>
      </Card>
    </div>
  );
}

export default DetailCard;
