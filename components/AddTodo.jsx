import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../reduxState/todoSlice";
import CustomButton from "./CustomButtonComp";
import AddIcon from "@mui/icons-material/Add";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "",
    contentError: null,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = () => {
    if (content === "") {
      setState({ ...state, contentError: "Please enter the todo!" });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: "" });
  };
  const { content, contentError } = state;
  return (
 
      <Paper sx={{ width: 700, padding: 5 }} elevation={4}>
        <Typography variant="h4">Add Todo with Redux</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={12} xs={12}>
            <TextField
              fullWidth
              type="text"
              value={content}
              name="content"
              placeholder="Enter here"
              onChange={handleChange}
            ></TextField>
            {contentError ? (
              <Typography color="red">{contentError}</Typography>
            ) : null}
          </Grid>
          <Grid item sm={12} md={12} xs={12}>
            <CustomButton
              startIcon={<AddIcon />}
              type="button"
              className="button"
              onClick={add}
              title={"Add"}
            />
          </Grid>
        </Grid>
      </Paper>
 
  );
};
export default AddTodo;
