import React from "react";

function Arrow({ width = 24, height = 24, color = "#000", rotation = 0 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <path
                d="m3.293 11.293 1.414 1.414L11 6.414V20h2V6.414l6.293 6.293 1.414-1.414L12 2.586l-8.707 8.707z"
                fill={color}
            />
        </svg>
    );
}

export default Arrow;
