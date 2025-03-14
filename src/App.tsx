import FormControl from "@mui/material/FormControl";

import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";
import ToogleButton from "./notes/presentation/components/buttons/toggle-button";
import Layout from "./notes/presentation/screens/layout-screen";
import NotesScreen from "./notes/presentation/screens/notesScreen";
import { Box, Stack } from "@mui/material";
import CreateNoteModal from "./notes/presentation/components/dialogs/create-note-modal";

function MyApp() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display:"flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Layout>
        <Stack height="100%" width="100%">
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            padding='0 3em'
          >
            <FormControl>
              <ToogleButton mode={mode} setMode={setMode} />
            </FormControl>
            <CreateNoteModal />
          </Stack>

          <NotesScreen />
        </Stack>
      </Layout>
    </Box>
  );
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme} noSsr>
      <MyApp />
    </ThemeProvider>
  );
}
