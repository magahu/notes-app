import { Card, FormHelperText } from "@mui/material";
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
    formState: { isDirty, isValid, errors },
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
    
       <Card sx={{ minWidth: 340 }}>
        <Stack margin='2em 0'>
            <StateButtons setActualState={setActualState} actualState={actualState}/>
        </Stack>
        <Stack padding='1em'>

        
      <FormControl
      fullWidth
        error={errors.text ? true : false}
      >
        <InputLabel htmlFor="my-input">Tarea por realizar:</InputLabel>
        
        <Input {...register("text", { required: true })}  defaultValue={note.text ? note.text : ''}></Input>
        {errors.text && <FormHelperText>Escribe algo</FormHelperText>}
        <br />
        <Button
          autoFocus
          disabled={!isDirty || !isValid ? true : false}
          type="submit"
          variant="contained"
          onClick={()=>updateNotes()}
        >
          GUARDAR
        </Button>
        
      </FormControl>
      </Stack>
      </Card>
 
  );
}