import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, STATE } from "../../domain/notesInitialStates";

type NotesInitialState = {
  value: number;
  notes: Note[];
  isCreateDialogOpen: boolean;
  isUpdateDialogOpen: boolean;
  noteToEdit: Note;
};

const defaultNotes: Note[] = [
  {
    state: STATE.IN_PROGRESS,
    text: "LAVAR LOS TRASTES",
    date: "Hoy",
  },
  {
    state: STATE.PENDING,
    text: "COMPRAR COMIDA PARA GATO",
    date: "Hoy",
  },
  {
    state: STATE.FINISH,
    text: "COMPRAR COMIDA PARA GATOS",
    date: "Hoy",
  },
  {
    state: STATE.FINISH,
    text: "COMPRAR COMIDA PARA GATO",
    date: "Hoy",
  },
  {
    state: STATE.PENDING,
    text: "HACER EJERCICIO",
    date: "Hoy",
  },
  {
    state: STATE.IN_PROGRESS,
    text: "LAVAR LOS TRASTES",
    date: "Hoy",
  },
  {
    state: STATE.FINISH,
    text: "COMPRAR COMIDA PARA GATOS",
    date: "Hoy",
  },
];

const notesInitialState: NotesInitialState = {
  value: 0,
  notes: defaultNotes,
  isCreateDialogOpen: false,
  isUpdateDialogOpen: false,
  noteToEdit: { state: STATE.PENDING, text: "", date: "",}
};

export const notesAppSlice = createSlice({
  name: "NOTES_COMPONENT",
  initialState: notesInitialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setNote: (state, action: PayloadAction<{ note: Note }>) => {
      const { note } = action.payload;
      state.notes.push(note);
    },
    SetIsCreateDialogOpen: (state, action: PayloadAction<{  isCreateDialogOpen: boolean }>) => {
      const { isCreateDialogOpen} = action.payload;
      state.isCreateDialogOpen = isCreateDialogOpen
    },
    deleteNote: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      state.notes.splice(index, 1);
    },
    updateNotes: (state, action: PayloadAction<{ notes: Note[] }>) => {
      const { notes } = action.payload;
      state.notes = notes;
    },
    SetIsUpdateDialogOpen: (state, action: PayloadAction<{  isUpdateDialogOpen: boolean }>) => {
      const { isUpdateDialogOpen} = action.payload;
      state.isUpdateDialogOpen = isUpdateDialogOpen
    },
    setNoteToEdit: (state, action: PayloadAction<{ noteToEdit: Note }>) => {
      const { noteToEdit } = action.payload;
      state.noteToEdit = noteToEdit;
    },
  },
});

export const { increment, setNote, deleteNote, SetIsCreateDialogOpen, updateNotes, SetIsUpdateDialogOpen, setNoteToEdit } = notesAppSlice.actions;

export default notesAppSlice.reducer;
