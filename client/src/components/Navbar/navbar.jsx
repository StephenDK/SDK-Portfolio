import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";
import { ThemeContext } from "../../themeContext";

const pages = ["Education", "Experience", "Projects", "Contact Me"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { mode, toggleTheme } = useContext(ThemeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        position: "absolute", // Position navbar absolutely to overlay on hero
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10, // Higher than hero image (zIndex: 1) and overlay (zIndex: 2)
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        px: 2,
        maxWidth: "xl",
        mx: "auto",
      }}
    >
      {/* Left Section: Menu Button (mobile) or SDK Title (desktop) */}
      <Box sx={{ display: "flex", alignItems: "center", zIndex: 10 }}>
        {/* Menu Button - Visible on mobile, hidden on md+ */}
        <IconButton
          size="large"
          aria-label="Toggle navigation menu"
          onClick={handleOpenNavMenu}
          sx={{
            color: "primary.contrastText",
            p: 1,
            display: { xs: "flex", md: "none" },
            zIndex: 10,
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* SDK Title - Hidden on mobile, visible on md+ */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 900,
            fontSize: { xs: "inherit", md: "1.5rem" },
            lineHeight: 1.2,
            letterSpacing: ".2rem",
            color: "primary.contrastText",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          &lt;SDK/&gt;
        </Typography>
      </Box>

      {/* Center Section: SDK Title on mobile */}
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 900,
          fontSize: { xs: "1.75rem", md: "inherit" },
          lineHeight: 1.2,
          letterSpacing: ".2rem",
          color: "primary.contrastText",
          textTransform: "uppercase",
          zIndex: 10,
        }}
      >
        &lt;SDK/&gt;
      </Typography>

      {/* Mobile Dropdown Menu */}
      <Menu
        id="menu-nav"
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
        sx={{ display: { xs: "block", md: "none" }, zIndex: 10 }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={handleCloseNavMenu}
            component={Link}
            to={`/${page.toLowerCase().replace(" ", "-")}`}
          >
            <Typography variant="h6" sx={{ textAlign: "center", color: "text.primary" }}>
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* Page Links - Hidden on mobile, flex on md+ */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          zIndex: 10,
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "primary.contrastText",
              display: "block",
              px: 2,
              py: 1,
              zIndex: 10,
            }}
            component={Link}
            to={`/${page.toLowerCase().replace(" ", "-")}`}
          >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {page}

          </Typography>
          </Button>
        ))}
      </Box>

      {/* Right Section: Icons (Home and Theme Toggle) */}
      <Box sx={{ display: "flex", alignItems: "center", zIndex: 10 }}>
        <Tooltip title="Go to home">
          <IconButton
            component={Link}
            to="/"
            sx={{ color: "primary.contrastText", p: 1, zIndex: 10 }}
          >
            <HomeIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
        <Tooltip
          title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        >
          <IconButton
            onClick={toggleTheme}
            sx={{ ml: 2, color: "primary.contrastText", p: 1, zIndex: 10 }}
          >
            {mode === "light" ? <DarkModeIcon fontSize="large"/> : <LightModeIcon fontSize="large"/>}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Navbar;
