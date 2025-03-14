
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useAppDispatch, useAppSelector } from "../../../infraestructure/store/hooks";
import { SetIsCreateDialogOpen } from "../../../infraestructure/slices/notes";
import { Fragment} from "react";
import NoteForm from "../forms/note-form";
import { useMediaQuery, useTheme } from "@mui/material";

export default function CreateNoteModal() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isOpen = useAppSelector(({notesReducer})=>notesReducer.isCreateDialogOpen)
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    dispatch(SetIsCreateDialogOpen({isCreateDialogOpen: true}))
  };

  const handleClose = () => {
    dispatch(SetIsCreateDialogOpen({isCreateDialogOpen: false}))
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{maxWidth:'2em'}} color="primary.default">
        +
      </Button>
      <Dialog
      fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <DialogTitle id="alert-dialog-title">
          {"Agrega una nueva tarea para hoy"}
        </DialogTitle>
        <DialogContent dividers={true}>
        
          <NoteForm/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
