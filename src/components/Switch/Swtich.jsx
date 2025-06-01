import React from "react";
import classes from "./Switch.module.css";

function Swtich({ value, onChange }) {
    return (
        <label className={classes.switch}>
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className={classes.slider} />
        </label>
    );
}

export default Swtich;
