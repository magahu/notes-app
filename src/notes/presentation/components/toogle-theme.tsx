import { useColorScheme } from "@mui/material/styles";
import ToogleButton from "./buttons/toggle-button";
import Stack from "@mui/material/Stack";


export function MySchemeToogle() {
    const { mode, setMode } = useColorScheme();
    //const [mode, setMode] = useState<boolean>(false)
  
    if (!mode) {
      return null;
    }
  
    return (
      <Stack
        sx={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          height: "100vh",
        }}
      >
        <ToogleButton mode={mode} setMode={setMode} />
      </Stack>
    );
  }