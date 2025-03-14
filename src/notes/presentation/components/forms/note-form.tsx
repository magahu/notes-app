import { FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../infraestructure/store/hooks";
import { Note, STATE } from "../../../domain/notesInitialStates";
import { SetIsCreateDialogOpen, setNote } from "../../../infraestructure/slices/notes";

type Inputs = {
  text: string;
};

const schema = yup
  .object({
    text: yup.string().trim().required(),
  })
  .required();

export default function NoteForm() {
    const dispatch = useAppDispatch()
  const {
    register,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
 


  const saveNote = ()=>{
    const text = getValues('text')
    if(text){
        const newNote: Note = {
            state: STATE.IN_PROGRESS,
            text: text,
            date: "Hoy",
          };
        dispatch(setNote({ note: newNote }));
        dispatch(SetIsCreateDialogOpen({isCreateDialogOpen: false}))
    }
    
  }

  return (
    <Stack>
      <FormControl
        error={errors.text ? true : false}
      >
        <InputLabel htmlFor="my-input">Tarea por realizar:</InputLabel>
        <Input {...register("text", { required: true })} />
        {errors.text && <FormHelperText>Escribe algo</FormHelperText>}
        <br />

        <Button
          autoFocus
          disabled={!isDirty || !isValid ? true : false}
          type="submit"
          variant="contained"
          onClick={()=>saveNote()}
        >
          GUARDAR
        </Button>
      </FormControl>
    </Stack>
  );
}
