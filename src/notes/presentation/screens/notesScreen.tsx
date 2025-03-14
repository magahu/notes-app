import { useAppSelector } from "../../infraestructure/store/hooks";
import Grid from "@mui/material/Grid2";
import NoteComponent from "../components/note";

export default function NotesBoard() {
  const notes = useAppSelector(({ notesReducer }) => notesReducer.notes);

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2}}
      columns={{ xs: 1, sm: 4, md: 8 }}
      overflow="scroll"
      padding="1.5em 2em"
      height="100%"
      width="100%"
    >
      {notes.map((note, index) => (
        <Grid key={index} size={{ xs: 2}}>
          <NoteComponent note={note} />
        </Grid>
      ))}
    </Grid>
  );
}
