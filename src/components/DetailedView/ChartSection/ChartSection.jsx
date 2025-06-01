import LineChart from "@/components/LineChart/LineChart";
import ChartLegends from "./ChartLegends/ChartLegends";
import useChartSection from "./useChartSection";
import React from "react";

const options = {
    animation: false,
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            title: {
                display: false,
            },
            grid: {
                display: true,
                color: "#d4d4d4",
            },
        },
        y: {
            title: {
                display: true,
                text: "CONSUMPTION(FT,THOUSANDS)",
            },
            ticks: {
                display: true,
                color: "#3b4c53",
                font: {
                    size: 12,
                },
            },
            grid: {
                display: false,
            },
        },
    },
};

function ChartSection({ selectedCard }) {
    const { data, toggleContent, setToggleContent } = useChartSection({
        selectedCard,
    });

    return (
        <>
            <ChartLegends
                toggleContent={toggleContent}
                setToggleContent={setToggleContent}
            />

            <LineChart options={options} data={data} />
        </>
    );
}

export default ChartSection;
