import { Card, FormHelperText, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../infraestructure/store/hooks";
import { Note} from "../../../domain/notesInitialStates";
import {  SetIsUpdateDialogOpen, setNote, updateNotes as updateNotesDispatch} from "../../../infraestructure/slices/notes";
import StateButtons from "../buttons/state-buttons";
import { useState } from "react";

type Inputs = {
  text: string;
};

const schema = yup
  .object({
    text: yup.string().trim().required(),
  })
  .required();

export default function NoteEditForm() {
    const dispatch = useAppDispatch()
    const notes = useAppSelector(({notesReducer})=>notesReducer.notes)
   
    const note = useAppSelector(({notesReducer})=>notesReducer.noteToEdit)
    const [actualState, setActualState] = useState(note.state);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const updateNotes = ()=>{
  

    
    const text = getValues('text')
    if(text){
        const newNote: Note = {
            state: actualState,
            text: text,
            date: "Hoy",
          };
          const newNotes = notes.map((n)=>{
            if(n===note){return newNote}else{return n}
          })
        dispatch(setNote({ note: newNote }));
       dispatch(updateNotesDispatch({notes: newNotes}))
        dispatch(SetIsUpdateDialogOpen({isUpdateDialogOpen: false}))
    }
    
  }

  return (
    
    <Stack width='100%'>
    <Card sx={{width:'100%'}}>
    <FormControl error={errors.text ? true : false} sx={{width:'100%', padding:'0.3em', margin:'1em 0'}}>
      <InputLabel htmlFor="my-input">Tarea por realizar:</InputLabel>
      <Input {...register("text", { required: true })} defaultValue={note.text}/>
      {errors.text && <FormHelperText>Escribe algo</FormHelperText>}
      <br />

      <Stack justifyContent="center" alignItems="center" direction="row">
        <Typography sx={{ color: "GrayText", paddingLeft: "1.3em" }}>
          Estado:
        </Typography>
        <StateButtons
          actualState={actualState}
          setActualState={setActualState}
        />
      </Stack>
      <br />
   
    </FormControl>
    </Card>
    <Button onClick={updateNotes} sx={{margin:'1em 0'}} variant="contained">GUARDAR NOTA</Button>
  </Stack>
 
  );
}