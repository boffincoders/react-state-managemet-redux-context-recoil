import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import CustomButton from "../../../components/CustomButtonComp";
import { todoListState } from "../../../recoilState/initialAtom";
const Recoil = () => {
  const [itemValue, setItemValue] = useState("");
  const [editItemValue, setEditItemValue] = useState("");
  const [editObject, setEditObject] = useState({});
  const [error, setError] = useState("");
  const [editPopup, setEditPopUp] = useState(false);
  const [TodoList, setTodoList] = useRecoilState(todoListState);
  const handleAddTodo = () => {
    if (itemValue === "") {
      setError(" It can't be  empty");
    } else
      setTodoList((oldState) => [
        ...oldState,
        {
          id: getId(),
          name: itemValue,
        },
      ]);
    setItemValue("");
  };

  const handleDeleteItem = (id) => {
    setTodoList((oldState) => {
      oldState = oldState.filter((x, i) => {
        if (x.id !== id) return x;
      });
      return oldState;
    });
  };

  const handleEditItem = (object) => {
    setEditPopUp(true);
    setEditObject(object);
    setEditItemValue(object.name);
  };
  const handleEditClick = () => {
    setTodoList(
      TodoList.map((x) => {
        x.id === editObject.id ? { ...x, name: editItemValue } : x;
      })
    );
    setEditPopUp(false);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Paper sx={{ p: 2, width: 600 }}>
        <Typography variant="h4">Add Item With Recoil</Typography>
        <TextField
          onChange={(e) => {
            setItemValue(e.target.value);
            itemValue.length > 0 ? setError() : setError(" It can't be  empty");
          }}
          value={itemValue}
          fullWidth
          type="text"
        />
        &nbsp;
        {error !== "" ? <Typography color={"red"}>{error}</Typography> : null}
        &nbsp;
        <CustomButton
          title={"Add"}
          startIcon={<AddIcon />}
          onClick={handleAddTodo}
        />
      </Paper>
      <ul
        style={{
          listStyleType: "none",
          width: 500,
          margin: 5,
      
        }}
      >
        {TodoList.length > 0 ? (
          TodoList?.map((v, index) => {
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
          <Typography component={"div"} textAlign="center">
            No data found
          </Typography>
        )}
      </ul>
      <Dialog open={editPopup} onClose={() => setEditPopUp(false)}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => e.target.value}
            value={editItemValue}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditPopUp(false)}>No</Button>
          <Button onClick={handleEditClick}>Yes</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
let id = 0;
const getId = () => {
  return id++;
};

export default Recoil;
