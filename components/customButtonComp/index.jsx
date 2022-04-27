import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ startIcon, title, onClick, childern }) => {
  return (
    <Button fullWidth startIcon={startIcon}  onClick={onClick} variant={"contained"}>
      {title}
    </Button>

    
  );
};

export default CustomButton;
