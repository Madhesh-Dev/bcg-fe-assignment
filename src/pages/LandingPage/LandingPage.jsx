import React from "react";
import classes from "./LandingPage.module.css";
import { Typography } from "@mui/material";
import Map from "@/components/Map/Map";
import CardsWidget from "@/components/CardsWidget/CardsWidget";
import mockData from "@/data/inventoryMockData.json";

export default function LandingPage() {
    const cities = mockData.cities;
    return (
        <div className={classes["landing-container"]}>
            <div className={classes["userinfo-widgets-container"]}>
                <Typography variant="h4" color="white" component="span">
                    Hello User,
                </Typography>
            </div>

            <CardsWidget cards={cities} />

            <Map />
        </div>
    );
}
