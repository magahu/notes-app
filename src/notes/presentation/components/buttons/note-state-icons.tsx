import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { STATE } from "../../../domain/notesInitialStates";

export default function NoteStateButtons({ state }: { state: STATE }) {
    
  return (
    <Box>
      {state === STATE.FINISH ? (
        <span style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
        <IconButton sx={{ bgcolor: "success.light", color: "success" }} disableRipple disableFocusRipple>
          <FileDownloadDoneIcon />
        </IconButton>
        </span>
      ) : state === STATE.IN_PROGRESS ? (
        <span style={{ cursor: 'not-allowed', pointerEvents: 'none'}}>
        <IconButton sx={{ bgcolor: "info.light", color: "info" }} disableRipple disableFocusRipple>
        <PlayArrowIcon />
        </IconButton>
        </span>
      ) : (
        <span style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
        <IconButton sx={{ bgcolor: "warning.light", color: "warning" }} disableRipple disableFocusRipple>
          
          <PauseIcon />
        </IconButton>
        </span>
      )}
    </Box>
  );
}
