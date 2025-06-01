import React from "react";
import classes from "./WidgetCard.module.css";
import { useNavigate } from "react-router-dom";
import LineChart from "@/components/LineChart/LineChart";
import Arrow from "@/assets/Arrow";

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            titleFont: {
                size: 10,
            },
            bodyFont: {
                size: 10,
            },
            footerFont: {
                size: 10,
            },
            padding: 6,
        },
    },
    scales: {
        x: {
            display: false,
            title: {
                display: false,
            },
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
        },
        y: {
            display: false,
            title: {
                display: false,
            },
            ticks: {
                display: false,
                font: {
                    size: 12,
                },
            },
            grid: {
                display: false,
            },
        },
    },
    layout: {
        padding: 0,
    },
};

function WidgetCard({ card }) {
    const navigate = useNavigate();

    const { id, name, widgetData } = card;

    const labels = widgetData.map((item) => item.quarter);

    const valueData = {
        labels,
        datasets: [
            {
                label: "Forecast",
                data: widgetData.map((item) => item.value),
                borderColor: "#6ac4e5",
                pointBackgroundColor: "#6ac4e5",
                pointRadius: 1,
                borderWidth: 1.5,
            },
        ],
    };

    const percentageData = {
        labels,
        datasets: [
            {
                label: "Forecast",
                data: widgetData.map((item) => item.percentage),
                borderColor: "#6ac4e5",
                pointBackgroundColor: "#6ac4e5",
                pointRadius: 1,
                borderWidth: 1.5,
            },
        ],
    };

    return (
        <div
            className={classes["card"]}
            onClick={() => {
                navigate(`details/${id}`);
            }}
        >
            <div className={classes["city-name"]}>{card.name}</div>

            <div className={classes["forecast-metric"]}>
                <div className={classes["metric-value"]}>
                    <div className={classes["title"]}>Forecast</div>
                    <div className={classes["value"]}>
                        {widgetData?.[0]?.value}
                    </div>
                </div>

                <div className={classes["chart-wrapper"]}>
                    <LineChart options={options} data={valueData} />
                </div>

                <Arrow color="#49e649" width={20} height={20} />
            </div>

            <div className={classes["forecast-metric"]}>
                <div className={classes["metric-value"]}>
                    <div className={classes["title"]}>Forecast</div>
                    <div className={classes["value"]}>
                        {widgetData?.[0]?.percentage}
                    </div>
                </div>

                <div className={classes["chart-wrapper"]}>
                    <LineChart options={options} data={percentageData} />
                </div>

                <Arrow color="#bb4c4c" width={20} height={20} rotation={180} />
            </div>
        </div>
    );
}

export default WidgetCard;
