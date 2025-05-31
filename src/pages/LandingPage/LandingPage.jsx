import React from "react";
import classes from "./LandingPage.module.css";
import { Typography } from "@mui/material";
import Map from "@/components/Map/Map";
import Widgets from "@/components/Widgets/Widgets";

export default function LandingPage() {
    return (
        <div className={classes["landing-container"]}>
            <div className={classes["userinfo-widgets-container"]}>
                <Typography variant="h4" color="white" component="span">
                    Hello User,
                </Typography>

                <Widgets />
            </div>

            <Map />
        </div>
    );
}
