import React from "react";
import LineChart from "@/components/LineChart/LineChart";

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: "Quarter",
            },
            grid: {
                display: false,
            },
        },
        y: {
            title: {
                display: true,
                text: "Value / Percentage",
            },
            ticks: {
                beginAtZero: true,
            },
        },
    },
};

function Graph({chartData}) {
    const labels = chartData.map((item) => item.quarter);
    const values = chartData.map((item) => item.value);
    const percentages = chartData.map((item) => item.percentage);

    const data = {
        labels,
        datasets: [
            {
                label: "Value",
                data: values,
                borderColor: "#6ac4e5",
                pointBackgroundColor: "#6ac4e5",
                tension: 0.3,
            },
            {
                label: "Percentage",
                data: percentages,
                borderColor: "#c9b244",
                pointBackgroundColor: "#c9b244",
                tension: 0.3,
            },
        ],
    };

    return <LineChart options={options} data={data} />;
}

export default Graph;
