import React from "react";
import { Link } from "react-router-dom";
import ExploreScreen from "./ExploreScreen";
import './CSS/explore.css'

const Tuiter = () => {
    return (
        <>
            <ExploreScreen />
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                lab
            </Link>
        </>
    )
};
export default Tuiter;




