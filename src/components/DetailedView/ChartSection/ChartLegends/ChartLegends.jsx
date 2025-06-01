import React from "react";
import classes from "./ChartLegends.module.css";
import Swtich from "@/components/Switch/Swtich";
import { CircularProgress } from "@mui/material";

function ChartLegends({ toggleContent, setToggleContent }) {
    return (
        <div className={classes["legends-container"]}>
            <div className={classes["historical"]}>
                <div className={classes["historical-title"]}>HISTORICAL</div>

                <div className={classes["historical-legend-container"]}>
                    <div className={classes["historical-ai"]}>
                        <Swtich
                            value={toggleContent.ai}
                            onChange={(e) => {
                                setToggleContent((prev) => ({
                                    ...prev,
                                    ai: e.target.checked,
                                }));
                            }}
                        />
                        <div className={classes["vertical-line-ai"]}></div>
                        AI Forecast
                    </div>

                    <div className={classes["historical-final"]}>
                        <div className={classes["progress-container"]}>
                            <CircularProgress
                                value={80}
                                size={20}
                                thickness={6}
                                variant="determinate"
                            />
                            80%
                        </div>

                        <div className={classes["historical-final-switch"]}>
                            <Swtich
                                value={toggleContent.final}
                                onChange={(e) => {
                                    setToggleContent((prev) => ({
                                        ...prev,
                                        final: e.target.checked,
                                    }));
                                }}
                            />
                            <div
                                className={classes["vertical-line-final"]}
                            ></div>
                            Final Forecast
                        </div>
                    </div>

                    <div className={classes["historical-consumption"]}>
                        <div className={classes["progress-container"]}>
                            <CircularProgress
                                value={88}
                                size={20}
                                thickness={6}
                                variant="determinate"
                            />
                            88%
                        </div>

                        <div
                            className={classes["historical-consumption-legend"]}
                        >
                            <div className={classes["solid-line"]} />
                            Consumption
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes["forecast"]}>
                <div className={classes["title"]}>FORECAST</div>
                <div className={classes["forecast-legend-container"]}>
                    <div className={classes["forecast-legend-item"]}>
                        <div
                            className={`${classes["dashed-line"]} ${classes["ai"]}`}
                        ></div>
                        AI Forecast
                    </div>

                    <div className={classes["forecast-legend-item"]}>
                        <div
                            className={`${classes["dashed-line"]} ${classes["final"]}`}
                        ></div>
                        Final Forecast
                    </div>

                    <div className={classes["forecast-legend-item"]}>
                        <div
                            className={`${classes["dashed-line"]} ${classes["previous"]}`}
                        ></div>
                        Previous Quarter Final Forecast
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartLegends;
