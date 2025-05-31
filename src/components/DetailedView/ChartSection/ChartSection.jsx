import React, { useMemo } from "react";
import LineChart from "@/components/LineChart/LineChart";
import mockData from "@/data/inventoryMockData.json";

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        annotation: {
            annotations: {
                line1: {
                    type: "line",
                    xMin: 5.5,
                    xMax: 5.5,
                    borderColor: "#666",
                    borderWidth: 2,
                    borderDash: [3, 3],
                    adjustScaleRange: false,
                },
            },
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
                borderColor: "#f00",
            },
        },
        y: {
            title: {
                display: true,
                text: "CONSUMPTION(FT,THOUSANDS)",
            },
            ticks: {
                display: true,
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

function ChartSection() {
    const cityId = "new_york";

    const activeCityIndex = mockData.cities.findIndex(
        (city) => city.id === cityId
    );

    const {
        labels,
        hForecast,
        hAiForecast,
        hConsumption,
        fForecast,
        fAiForecast,
    } = useMemo(() => {
        const activeCityData = mockData.cities[activeCityIndex];

        const filteredSet = activeCityData.detailSets[0];

        const { historicalData, forecastData } = filteredSet;

        const mergedData = [...historicalData, ...forecastData];

        const labels = [],
            hForecast = [],
            hConsumption = [],
            hAiForecast = [],
            fForecast = [],
            fAiForecast = [];

        mergedData.forEach((item, index) => {
            const { quarter, actual, aiForecast, finalForecast } = item;

            labels.push(quarter);

            if (index < historicalData.length) {
                hForecast[index] = finalForecast;
                hAiForecast[index] = aiForecast;
                hConsumption[index] = actual;
            } else {
                fForecast[index] = finalForecast;
                fAiForecast[index] = aiForecast;
            }
        });

        return {
            labels,
            hForecast,
            hAiForecast,
            hConsumption,
            fForecast,
            fAiForecast,
        };
    }, [activeCityIndex]);

    const data = {
        labels,
        datasets: [
            {
                label: "Final Forecast",
                data: hForecast,
                borderColor: "#c9b244",
                pointBackgroundColor: "#c9b244",
            },
            {
                label: "Consumption",
                data: hConsumption,
                borderColor: "#6ac4e5",
                pointBackgroundColor: "#6ac4e5",
            },
            {
                label: "AI Forecast",
                data: hAiForecast,
                borderColor: "#5cc25d",
                pointBackgroundColor: "#5cc25d",
            },
            {
                label: "Final Forecast",
                data: fForecast,
                borderColor: "#c9b244",
                pointBackgroundColor: "#c9b244",
                borderDash: [3, 3],
            },
            {
                label: "AI Forecast",
                data: fAiForecast,
                borderColor: "#5cc25d",
                pointBackgroundColor: "#5cc25d",
                borderDash: [3, 3],
            },
            // {
            //     label: "Previous Quarter Final Forecast",
            //     data: [120, 40, 60, 80],
            //     borderColor: "#cfb6b1",
            //     borderDash: [5, 5],
            // },
        ],
    };

    return <LineChart options={options} data={data} />;
}

export default ChartSection;
