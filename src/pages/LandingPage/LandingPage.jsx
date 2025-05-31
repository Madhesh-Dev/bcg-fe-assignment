import Map, { Source, Layer, Popup } from "react-map-gl";
import React from "react";
import classes from "./LandingPage.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Typography } from "@mui/material";

export default function LandingPage() {
    const [viewState, setViewState] = React.useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
    });

    return (
        <div className={classes["landing-container"]}>
            <div className={classes["userinfo-widgets-container"]}>
                <Typography variant="h4" color="white" component="span">
                    Hello User,
                </Typography>

                <div className={classes["widgets-container"]}></div>
            </div>

            <div className={classes["map-container"]}>
                <Map
                    reuseMaps={true}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                    renderWorldCopies={false}
                />
            </div>
        </div>
    );
}
