

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, IconButton,  Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../infraestructure/store/hooks";
import { SetIsUpdateDialogOpen, setNoteToEdit} from "../../../infraestructure/slices/notes";
import { Fragment} from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import NoteEditForm from "../forms/note-edit-form";
import { Note } from "../../../domain/notesInitialStates";

export default function EditNoteModal({note}: {note:Note}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isOpen = useAppSelector(({notesReducer})=>notesReducer.isUpdateDialogOpen)
  const dispatch = useAppDispatch()
 

 const handleClickOpen = () => {
    dispatch(SetIsUpdateDialogOpen({isUpdateDialogOpen: true}));
    dispatch(setNoteToEdit({noteToEdit: note}));
  };

  const handleClose = () => {
    dispatch(SetIsUpdateDialogOpen({isUpdateDialogOpen: false}))
  };


  return (
    <Fragment>
      <Tooltip title="EDITAR" placement="bottom" onClick={handleClickOpen}>
            <IconButton aria-label="edit-button">
              <ModeEditIcon />
            </IconButton>
      </Tooltip>
      <Dialog
       fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" textAlign='center'>
        {"Edita tu nota"}
          
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
