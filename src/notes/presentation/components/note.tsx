import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Stack} from "@mui/material";
import { Note } from "../../domain/notesInitialStates";


import DeleteNoteButton from "./buttons/delete-note-button";
import EditNoteModal from "./dialogs/edit-note-modal";
import NoteStateButtons from "./buttons/note-state-icons";


export default function NoteComponent({ note }: { note: Note }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <NoteStateButtons state={note.state}/>
        }
        title={note.state}
        subheader={note.date}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }} textAlign='center'>
          {note.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction='row' justifyContent='space-between' width='100%'>
        
        <DeleteNoteButton note={note}/>
        <Box>
            <EditNoteModal note={note}/>
        </Box>
        </Stack>

      </CardActions>
    </Card>
  );
}
