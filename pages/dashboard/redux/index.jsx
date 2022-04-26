import { Box } from "@mui/material";
import React from "react";
import AddTodo from "../../../components/AddTodo";
import TodoItem from "../../../components/TodoItem";

const Redux = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
      flexDirection={"column"}
    >
      <AddTodo />
      <TodoItem />
    </Box>
  );
};

export default Redux;
