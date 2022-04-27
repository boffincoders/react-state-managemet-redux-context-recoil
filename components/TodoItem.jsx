import React, { useState, useMemo } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../reduxState/todoSlice";
import {
  Dialog,
  IconButton,
  TextField,
  Typography,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";

const TodoItem = () => {
  const { todoList } = useSelector((state) => state?.todo);
  const [editOpen, setEditOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });
  const onEditToggle = (id, content) => {
    setEditOpen(true);
    setState({ ...state, id, content });
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const { content, contentError, id } = state;
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const edit = () => {
    if (content === "") {
      setState({ ...state, contentError: "Please enter the todo!" });
      return;
    }
    dispatch(editTodo({ content, id }));
    setEditOpen(false);
  };

  return (
    <div>
      <ul style={{ listStyleType: "none", width: 500 }}>
        {todoList.length > 0 ? (
          todoList?.map(({ id, content }, index) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#f3f3f3",
                  padding: 10,
                  margin : 10
                }}
                key={id}
              >
                <span>{index + 1}.</span>
                <span style={{ fontSize: 25 }}>{content}</span>
                <span className="todo-action">
                  <IconButton color="error">
                    <DeleteIcon
                      className="close"
                      onClick={() => dispatch(deleteToDo({ id }))}
                    />
                  </IconButton>
                  {/* <IconButton
                    color="primary"
                    onClick={() => onEditToggle(id, content)}
                  >
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
      <Dialog
        open={editOpen}
        TransitionComponent={Transition}
        onClose={() => setEditOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Item"}</DialogTitle>
        <DialogContent>
          <TextField
            type="text"
            fullWidth
            value={content}
            name="content"
            onChange={handleChange}
          ></TextField>
          {contentError ? <div className="error">{contentError}</div> : null}
          {/* <CustomButton
          type="button"
          className="button"
          onClick={edit}
          title="Edit"
        ></CustomButton> */}
          {contentError ? <div className="error">{contentError}</div> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>No</Button>
          <Button onClick={edit}>Yes</Button>
        </DialogActions>
      </Dialog>

      
    </div>
  );
};
export default React.memo(TodoItem);
