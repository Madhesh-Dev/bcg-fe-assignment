import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Flag, TableChart } from "@mui/icons-material";
import ChartSection from "./ChartSection/ChartSection";
import classes from "./DetailedView.module.css";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Swtich from "../Switch/Swtich";

function HeaderBar({ selectedCard }) {
    return (
        <div className={classes.header}>
            <div className={classes.leftSection}>
                <ReportProblemIcon
                    className={classes.iconWarning}
                    style={{ width: "16px", height: "16px" }}
                />
                <span className={classes.title}>Sample Stack</span>
                <div className={classes.divider} />
                <span className={classes.stackIdLabel}>
                    Stack Id:{" "}
                    <span className={classes.stackIdValue}>{selectedCard}</span>
                </span>
                <TableChart
                    style={{ width: "16px", height: "16px" }}
                    className={classes.tableIcon}
                />
            </div>

            <div className={classes.forecastBox}>
                <div className={classes.forecastCard}>
                    <div className={classes.forecastLabel}>FORECAST</div>
                    <div className={classes.forecastValue}>89%</div>
                </div>
                <div className={classes.forecastCard}>
                    <div className={classes.forecastLabel}>FORECAST</div>
                    <div className={classes.forecastValue}>80%</div>
                </div>
            </div>

            <Flag className={classes.flagIcon} />
        </div>
    );
}

export default function DetailedView({
    selectedCard,
    filteredSelectedData = {},
}) {
    const { historicalData, forecastData } = filteredSelectedData;

    const mergedData = [...historicalData, ...forecastData];

    return (
        <div className={classes.container}>
            <HeaderBar selectedCard={selectedCard} />

            <div className={classes.controls}>
                <div className={classes.switchContainer}>
                    <FilePresentIcon />
                    <div className={classes.title}>SPECIAL REQUIREMENTS</div>

                    <Swtich />
                </div>
            </div>

            <div className={classes.chart_section}>
                <ChartSection selectedCard={selectedCard} />
            </div>

            <div className={classes.dataTable}>
                <div className={classes.row}>
                    <span style={{ marginRight: "20px", minWidth: "90px" }}>
                        Consumption
                    </span>
                    {mergedData.map((item, index) => (
                        <span
                            key={index}
                            style={{ minWidth: "65px", textAlign: "center" }}
                        >
                            {item.actual}
                        </span>
                    ))}
                </div>
                <div className={classes.row}>
                    <span
                        style={{
                            marginRight: "20px",
                            minWidth: "90px",
                        }}
                    >
                        AI
                    </span>
                    {mergedData.map((item, index) => (
                        <span
                            key={index}
                            style={{ minWidth: "65px", textAlign: "center" }}
                        >
                            {item.finalForecast}
                        </span>
                    ))}
                </div>
                <div className={classes.row}>
                    <span style={{ marginRight: "20px", minWidth: "90px" }}>
                        Final
                    </span>
                    {mergedData.map((item, index) => (
                        <span
                            key={index}
                            style={{ minWidth: "65px", textAlign: "center" }}
                        >
                            {item.aiForecast}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
