import React from "react";
import classes from "./WidgetCard.module.css";
import Graph from "./Graph";

function WidgetCard({
    cityName,
    forecastValue,
    forecastPercent,
    isValueUp,
    name,widgetData,
    isPercentUp,...rest
}) {
    console.log('rest',rest);
    
    return (<div className={classes["card"]}>{name}
    
    
        <div>Forecast</div>
        <div>{widgetData?.[0]?.value}</div> <div>Forecast</div>
        <div>{widgetData?.[0]?.percentage}</div>
    
        <Graph chartData={ widgetData} />
    </div>);
}

export default WidgetCard;
