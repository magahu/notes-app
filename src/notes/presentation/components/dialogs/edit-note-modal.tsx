
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useAppDispatch, useAppSelector } from "../../../infraestructure/store/hooks";
import { SetIsUpdateDialogOpen } from "../../../infraestructure/slices/notes";
import { Fragment} from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import NoteEditForm from "../forms/note-edit-form";
import EditNoteButton from "../buttons/edit-button";
import { Note } from "../../../domain/notesInitialStates";

export default function EditNoteModal({note}: { note: Note }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isOpen = useAppSelector(({notesReducer})=>notesReducer.isUpdateDialogOpen)
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(SetIsUpdateDialogOpen({isUpdateDialogOpen: false}))
  };

  return (
    <Fragment>
      <EditNoteButton note={note}/>
      <Dialog
      fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <DialogTitle id="alert-dialog-title">
          {"Edita la tarea seleccionada"}
        </DialogTitle>
        <DialogContent dividers={true}>
        
          <NoteEditForm/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
