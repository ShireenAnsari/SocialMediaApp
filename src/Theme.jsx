import { createTheme } from "@mui/material";
import { green, purple,orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      otherColor:{
        main: green[500]
      }
    },
  });