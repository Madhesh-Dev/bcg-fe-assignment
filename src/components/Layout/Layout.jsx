import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: "#191919" }}>
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Inventory Management
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="language"
                            color="inherit"
                        >
                            <LanguageIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="profile"
                            color="inherit"
                        >
                            <PersonIcon />
                        </IconButton>

                        <Typography
                            variant="body1"
                            color="inherit"
                            component="div"
                            sx={{ ml: 1 }}
                        >
                            User
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    );
}

export default Layout;
