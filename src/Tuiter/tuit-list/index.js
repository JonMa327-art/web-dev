import React from "react";
import tuits from "../data/tuits.json"
import TuitListItem from "./tuit-list-item";
import './tuits.css';

const TuitList = () => {
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                        tuit={tuit} />)
            }
        </ul>
    );
}

export default TuitList;