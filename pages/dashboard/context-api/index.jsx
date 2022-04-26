import { IconButton, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import CustomButton from "../../../components/CustomButtonComp";
import { TodoContext } from "../../../contextState";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const ContextAPI = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [error, setError] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const handleAddTodo = () => {
    if (todoValue === "") {
      setError("please enter the todo!");
    } else {
      setTodoList((prevState) => {
        return [...prevState, { name: todoValue, id: getId() }];
      });
      setTodoValue("");
    }
  };
  const handleDeleteItem = (id) => {
    setTodoList((prevState) => {
      prevState = prevState.filter((item) => item.id !== id);
      return prevState;
    });
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Paper sx={{ p: 2, width: 600 }}>
        <Typography variant="h4">Add Todo with Context API</Typography>
        <TextField
          onChange={(e) => setTodoValue(e.target.value)}
          fullWidth
          value={todoValue}
        />
         &nbsp;
        {todoValue === "" ? <Typography color="red">{error}</Typography> : null}
        &nbsp;
        <CustomButton
          title={"Add"}
          startIcon={<AddIcon />}
          onClick={handleAddTodo}
        />
      </Paper>
      <ul style={{ listStyleType: "none", width: 500, margin: 5 }}>
        {todoList.length > 0 ? (
          todoList?.map((v, index) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#f3f3f3",
                  padding: 10,
                }}
                key={index}
              >
                <span>{index + 1}.</span>
                <span style={{ fontSize: 25 }}>{v.name}</span>
                <span className="todo-action">
                  <IconButton color="error">
                    <DeleteIcon
                      className="close"
                      onClick={() => handleDeleteItem(v.id)}
                    />
                  </IconButton>
                  {/* <IconButton color="primary" onClick={() => handleEditItem(v)}>
                    <EditIcon className="edit" />
                  </IconButton> */}
                </span>
              </li>
            );
          })
        ) : (
          <Typography component={"div"} textAlign='center'>
           No data found
          </Typography>
        )}
      </ul>
    </Box>
  );
};
let id = 0;
const getId = () => {
  return id++;
};
export default ContextAPI;
