// theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f4e6c9", // Deep blue for primary elements
      light: "#42A5F5",
      dark: "#1565C0",
      contrastText: "#3d464b",
    },
    secondary: {
      main: "#D81B60", // Vibrant pink for secondary elements
      light: "#F06292",
      dark: "#AD1457",
      contrastText: "#643d20",
    },
    background: {
      default: "#F5F5F5", // Light gray for app background
      paper: "#FFFFFF", // White for paper-like surfaces
    },
    text: {
      primary: "#212121", // Dark gray for primary text
      secondary: "#757575", // Lighter gray for secondary text
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#081d38",
      light: "#E3F2FD",
      dark: "#42A5F5",
      contrastText: "#ffffff", // Black text for contrast
    },
    secondary: {
      main: "#F48FB1", // Lighter pink for dark mode
      light: "#F8BBD0",
      dark: "#F06292",
      contrastText: "#000000",
    },
    background: {
      default: "#303030", // Dark gray for app background
      paper: "#424242", // Lighter dark for surfaces
    },
    text: {
      primary: "#FFFFFF", // White for primary text
      secondary: "#B0B0B0", // Light gray for secondary text
    },
  },
});

export { lightTheme, darkTheme };
