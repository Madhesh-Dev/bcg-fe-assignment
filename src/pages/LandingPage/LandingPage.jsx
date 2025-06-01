import React from "react";
import classes from "./LandingPage.module.css";
import { Typography } from "@mui/material";
import Map from "@/components/Map/Map";
import CardsWidget from "@/components/CardsWidget/CardsWidget";
import mockData from "@/data/inventoryMockData.json";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

export default function LandingPage() {
    const cities = mockData.cities;
    return (
        <div className={classes["landing-container"]}>
            <div className={classes["userinfo-widgets-container"]}>
                <h1>Hello User,</h1>

                <div className={classes["action-items"]}>
                    <InfoOutlineIcon sx={{ fontSize: 14 }} />
                    There are 2 active actions
                </div>
            </div>

            <CardsWidget cards={cities} />

            <Map />
        </div>
    );
}
