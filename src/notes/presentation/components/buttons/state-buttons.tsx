import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Stack from "@mui/material/Stack";
import { STATE } from "../../../domain/notesInitialStates";


type StateButtonsProps = {
  actualState: STATE,
  setActualState: (state: STATE) => void
}

export default function StateButtons({actualState, setActualState}: StateButtonsProps) {


  return (
    <Stack width="100%" direction="row" justifyContent="space-evenly">
      <Tooltip title=" COMPLETADA" placement="top">
        <IconButton
          sx={{ bgcolor: actualState === STATE.FINISH ? "success.light": "gray", color: "success" }}
          onClick={() =>
            setActualState(STATE.FINISH)
          }
        >
          <FileDownloadDoneIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="EN PROCESO" placement="top">
        <IconButton
          sx={{ bgcolor: actualState === STATE.IN_PROGRESS? "info.light": "gray", color: "info" }}
          onClick={() =>
            setActualState(STATE.IN_PROGRESS)
          }
        >
          <PlayArrowIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="PENDIENTE" placement="top">
        <IconButton
          sx={{ bgcolor: actualState === STATE.PENDING ? "warning.light": "gray", color: "warning" }}
          onClick={() =>
            setActualState(STATE.PENDING)
          }
        >
         <PauseIcon />
        </IconButton>
      </Tooltip>
      
    </Stack>
  );
}
