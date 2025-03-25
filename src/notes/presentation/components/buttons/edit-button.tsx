
import { useAppDispatch} from "../../../infraestructure/store/hooks";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import { Note } from "../../../domain/notesInitialStates";
import { SetIsUpdateDialogOpen, setNoteToEdit } from "../../../infraestructure/slices/notes";
type DeleteNoteProps = {
    note: Note
}
export default function EditNoteButton({note }: DeleteNoteProps) {
  const dispatch = useAppDispatch();
  
  const setNewNote = () => {
    dispatch(setNoteToEdit({noteToEdit: note}));
    dispatch(SetIsUpdateDialogOpen({isUpdateDialogOpen: true}));
  }
  return (
    <Tooltip title="EDITAR" placement="bottom">
      <IconButton
        aria-label="delete-button"
        onClick={() => setNewNote()}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
}