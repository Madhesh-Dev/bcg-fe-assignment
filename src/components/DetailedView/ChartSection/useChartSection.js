import mockData from "@/data/inventoryMockData.json";
import { useMemo, useState } from "react";

const useChartSection = ({ selectedCard }) => {
    const cityId = "new_york";
    const [toggleContent, setToggleContent] = useState({
        ai: true,
        final: true,
    });

    const activeCityIndex = mockData.cities.findIndex(
        (city) => city.id === cityId
    );
    const activeCardIndex = mockData.cities[
        activeCityIndex
    ].detailSets.findIndex((card) => card.cardId === selectedCard);

    const {
        labels,
        hForecast,
        hAiForecast,
        hConsumption,
        fForecast,
        fAiForecast,
    } = useMemo(() => {
        const activeCityData = mockData.cities[activeCityIndex];

        const filteredSet = activeCityData.detailSets[activeCardIndex];

        const { historicalData, forecastData } = filteredSet;

        const mergedData = [...historicalData, ...forecastData];

        const labels = [];
        const hForecast = [];
        const hConsumption = [];
        const hAiForecast = [];
        const fForecast = [];
        const fAiForecast = [];

        mergedData.forEach((item, index) => {
            const { quarter, actual, aiForecast, finalForecast } = item;

            labels.push(quarter.split(" "));

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
    }, [activeCityIndex, activeCardIndex]);

    const data = {
        labels,
        datasets: [
            {
                label: "Final Forecast",
                data: hForecast,
                borderColor: "#c9b244",
                pointBackgroundColor: "#c9b244",
                hidden: !toggleContent.final,
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
                hidden: !toggleContent.ai,
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
            {
                label: "Previous Quarter Final Forecast",
                data: [120, 40, 60, 80],
                borderColor: "#cfb6b1",
                borderDash: [5, 5],
            },
        ],
    };

    return {
        data,
        toggleContent,
        setToggleContent,
    };
};

export default useChartSection;
