import {
  AppBar,
  Container,
  Toolbar,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import logoImg from "../../assets/img/logo-nowrap.png";
import LightSwitch from "./light-switch";
import { MouseEvent, useContext, useState } from "react";
import { ThemeContext } from "../../theme/context/theme-provider";
import { PAGES } from "./constants";
import { Menu as MenuIcon } from "@mui/icons-material";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            // border="1px solid red"
            width="100%"
          >
            <Stack direction="row" alignItems="center">
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <img
                src={logoImg}
                alt="logo"
                // style={{ border: "1px solid red" }}
                width="120rem"
              />
              {/* <LogoIcon />
              <Typography
                variant="h6"
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  // letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                noWrap
              >
                dev:chika
              </Typography> */}
            </Stack>

            <LightSwitch
              sx={{ m: 1 }}
              size="small"
              checked={!isDark}
              onChange={toggleTheme}
            />

            <Stack direction="row" alignItems="center" sx={{ flexGrow: 0 }}>
              <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
                {PAGES.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: { xs: "none", md: "BLOCK" },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Stack>
              <IconButton
                size="small"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  display: { xs: "block", md: "none" },
                  padding: 0,
                }}
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {PAGES.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
