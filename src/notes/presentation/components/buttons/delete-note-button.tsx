
import { useAppDispatch, useAppSelector} from "../../../infraestructure/store/hooks";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Note } from "../../../domain/notesInitialStates";
import { deleteNote as deleteNoteDispatch } from "../../../infraestructure/slices/notes";
type DeleteNoteProps = {
    note: Note
}
export default function DeleteNoteButton({note }: DeleteNoteProps) {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(({notesReducer})=>notesReducer.notes)
  
  const findNoteIndex = () =>{
    const i = notes.findIndex((n)=>n===note)
    return i;

  }
  const deleteNote = () => {
    const i = findNoteIndex();
    dispatch(deleteNoteDispatch({index: i}))
  }
  return (
    <Tooltip title="BORRAR" placement="bottom">
      <IconButton
        aria-label="delete-button"
        onClick={() => deleteNote()}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
