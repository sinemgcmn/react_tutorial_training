import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const totalMaximum = Math.max();
    console.log("chart, props")
    const dataPointValues = props.dataPoints.map(dataPoint => )
    const totalMax = Mart.max();
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
