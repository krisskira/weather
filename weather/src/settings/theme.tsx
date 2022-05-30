import { createTheme, responsiveFontSizes,  } from "@mui/material";
import { grey } from "@mui/material/colors";
export const APP_THEME = responsiveFontSizes(
  createTheme({
    spacing: 16,
    palette: {
      background: {
        default: grey[500],
      }
    }
  })
);
