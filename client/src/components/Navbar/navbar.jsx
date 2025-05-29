import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode"; // Sun for light mode
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Moon for dark mode
import { ThemeContext } from "../../themeContext";

const pages = ["About Me", "Contact Me"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { mode, toggleTheme } = useContext(ThemeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div" // Changed from "a" to remove link
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 900,
              fontSize: { xs: "inherit", md: "1.5rem" }, // Larger on desktop
              lineHeight: 1.2, // Tighten line height to fit
              letterSpacing: ".2rem",
              color: "primary.contrastText",
              textTransform: "uppercase",
            }}
          >
            SDK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "text.primary" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 900,
              fontSize: { xs: "1.75rem", md: "inherit" }, // Larger on mobile
              lineHeight: 1.2, // Tighten line height to fit
              letterSpacing: ".2rem",
              color: "primary.contrastText",
              textTransform: "uppercase",
            }}
          >
            SDK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "primary.contrastText", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip title="Go to home">
              <IconButton
                component="a"
                href="/"
                sx={{ color: "primary.contrastText" }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
            >
              <IconButton
                onClick={toggleTheme}
                sx={{ ml: 2, color: "primary.contrastText" }}
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
