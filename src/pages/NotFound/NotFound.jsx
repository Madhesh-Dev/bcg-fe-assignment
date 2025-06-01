import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={classes["not-found-container"]}>
            <h1 className={classes["not-found-title"]}>404</h1>
            <p className={classes["not-found-message"]}>
                Oops! Page not found.
            </p>
            <Link to="/" className={classes["not-found-link"]}>
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
