import LineChart from "@/components/LineChart/LineChart";
import ChartLegends from "./ChartLegends/ChartLegends";
import useChartSection from "./useChartSection";
import React from "react";

function ChartSection({ selectedCard }) {
    const { data, options, toggleContent, setToggleContent } = useChartSection({
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
