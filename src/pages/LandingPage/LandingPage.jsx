import Map, { Projection, Source, Layer, useMap, Popup } from "react-map-gl";
import React from "react";
import classes from "./LandingPage.module.css";

export default function LandingPage() {
    const [viewState, setViewState] = React.useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
    });

    return (
        <div className={classes["map-container"]}>
            <Map
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
            />
            Hello
        </div>
    );
}
