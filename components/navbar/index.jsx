import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import CustomBox from "../Box";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#F2C533", color: "white" ,width : "100%"}}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
