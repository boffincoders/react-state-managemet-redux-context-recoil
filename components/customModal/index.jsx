import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const CustomModal = (props) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      onClose={() => props.setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Edit Item"}</DialogTitle>
      <DialogContent>{props.renderContent()}</DialogContent>
      <DialogActions>
        <Button onClick={props.setOpen(false)}>Disagree</Button>
        <Button onClick={props.setOpen(false)}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
