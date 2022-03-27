import React from "react";
import TuitListItem from "./tuit-list-item";
import { useSelector } from "react-redux";
// import './tuits.css';

const TuitList = () => {
    const tuitList = useSelector((state) => state.tuitReducer)
    return (
        <ul className="ttr-tuits list-group">
            {
                tuitList.map(tuit =>
                    <TuitListItem tuit={tuit} key={tuit._id} />)
            }
        </ul>
    );
}

export default TuitList;