import React, { useContext } from "react";
import Button from "@mui/material/Button";

export const PinkButton = (props) => {
  const { onClick, text } = props;

  return (
    <Button
      variant="contained"
      style={{
        background: "#ec008c",
        color: "white",
        height: "48px",
        fontSize: ".8em",
        minWidth: "200px",
      }}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </Button>
  );
};

export default PinkButton;
