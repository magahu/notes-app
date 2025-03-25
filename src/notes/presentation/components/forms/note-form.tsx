import { Card, FormHelperText, Typography } from "@mui/material";
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
import {
  SetIsCreateDialogOpen,
  setNote,
} from "../../../infraestructure/slices/notes";
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

export default function NoteForm() {
  const [buttonState, setButtonState] = useState<STATE>(STATE.IN_PROGRESS);
  const dispatch = useAppDispatch();
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const saveNote = () => {
    const text = getValues("text");
    if (text) {
      const newNote: Note = {
        state: buttonState,
        text: text,
        date: "Hoy",
      };
      dispatch(setNote({ note: newNote }));
      dispatch(SetIsCreateDialogOpen({ isCreateDialogOpen: false }));
    }
  };

  return (
    <Stack>
      <Card sx={{width:'100%'}}>
      <FormControl error={errors.text ? true : false} sx={{width:'100%', padding:'0.3em', margin:'1em 0'}}>
        <InputLabel htmlFor="my-input">Tarea por realizar:</InputLabel>
        <Input {...register("text", { required: true })} />
        {errors.text && <FormHelperText>Escribe algo</FormHelperText>}
        <br />

        <Stack justifyContent="center" alignItems="center" direction="row">
          <Typography sx={{ color: "GrayText", paddingLeft: "1.3em" }}>
            Estado:
          </Typography>
          <StateButtons
            actualState={buttonState}
            setActualState={setButtonState}
          />
        </Stack>
        <br />
     
      </FormControl>
      </Card>
      <Button onClick={saveNote} sx={{margin:'1em 0'}} variant="contained">GUARDAR NOTA</Button>
    </Stack>
  );
}
