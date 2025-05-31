import React from "react";
import WidgetCard from "./WidgetCard/WidgetCard";
import mockData from "@/data/inventoryMockData.json";
import classes from "./Widgets.module.css";

function Widgets() {
    const cities = mockData.cities;

    return (
        <div className={classes["widgets-container"]}>
            {cities.map((city) => (
                <WidgetCard key={city.id} data={city} />
            ))}
        </div>
    );
}

export default Widgets;
