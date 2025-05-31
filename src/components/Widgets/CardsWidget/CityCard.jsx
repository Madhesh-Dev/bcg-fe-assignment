import classes from "./Widgets.module.css";

export default function CityCard({
    cityName,
    forecastValue,
    forecastPercent,
    isValueUp,
    isPercentUp,
}) {
    return (
        <div className={classes.cityCard}>
            <h2 className={classes.cityName}>{cityName}</h2>

            <div className={classes.section}>
                <p className={classes.label}>Forecast</p>
                <div className={classes.row}>
                    <span className={classes.value}>{forecastValue}</span>
                    <span
                        className={`${classes.arrow} ${
                            isValueUp ? classes.up : classes.down
                        }`}
                    >
                        {isValueUp ? ">" : "<"}
                    </span>
                </div>
            </div>

            <div className={classes.section}>
                <p className={classes.label}>Forecast</p>
                <div className={classes.row}>
                    <span className={classes.value}>{forecastPercent}%</span>
                    <span
                        className={`${classes.arrow} ${
                            isPercentUp ? classes.up : classes.down
                        }`}
                    >
                        {isPercentUp ? ">" : "<"}
                    </span>
                </div>
            </div>
        </div>
    );
}
