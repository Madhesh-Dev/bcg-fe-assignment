import React, { useState } from "react";
import classes from "./LandingPage.module.css";
import { Typography } from "@mui/material";
import Map from "@/components/Map/Map";
import CardsWidget from "@/components/CardsWidget/CardsWidget";
import mockData from "@/data/inventoryMockData.json";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function LandingPage() {
    const [pageLoading, setPageLoading] = useState(true);
    const cities = mockData.cities;

    return (
        <div className={classes["landing-container"]}>
            <Backdrop
                sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={pageLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {!pageLoading && (
                <div className={classes["inner-container"]}>
                    <div className={classes["userinfo-widgets-container"]}>
                        <h1>Hello User,</h1>

                        <div className={classes["action-items"]}>
                            <InfoOutlineIcon sx={{ fontSize: 14 }} />
                            There are 2 active actions
                        </div>
                    </div>

                    <CardsWidget cards={cities} />
                </div>
            )}

            <Map setPageLoading={setPageLoading} />
        </div>
    );
}
