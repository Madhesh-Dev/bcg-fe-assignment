import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Layout.module.css";

function Layout() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
                height: "100%",
                backgroundColor: "#191919",
                color: "white",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem
                    button
                    onClick={() => navigate("/")}
                    sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#2a2a2a" },
                    }}
                >
                    <ListItemIcon sx={{ color: "white" }}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </List>

            <Divider sx={{ backgroundColor: "#444" }} />

            <List>
                <ListItem
                    button
                    onClick={() => navigate("/language")}
                    sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#2a2a2a" },
                    }}
                >
                    <ListItemIcon sx={{ color: "white" }}>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Language" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate("/profile")}
                    sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#2a2a2a" },
                    }}
                >
                    <ListItemIcon sx={{ color: "white" }}>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className={classes["layout-container"]}>
            <AppBar position="sticky" sx={{ backgroundColor: "#191919" }}>
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
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
                            onClick={() => navigate("/language")}
                        >
                            <LanguageIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="profile"
                            color="inherit"
                            onClick={() => navigate("/profile")}
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

            {/* Sidebar Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerContent}
            </Drawer>

            <div className={classes["outlet-contianer"]}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
