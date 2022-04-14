import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTuit, createTuit, deleteTuit, findAllTuits } from "../action/tuits-action.js";

const TuitList = () => {
    let tuitList = useSelector((state) => state.tuitReducer)
    // const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({ tuit: 'New tuit' });

    useEffect(() => findAllTuits(dispatch), []);

    return (
        <>
            <ul className="ttr-tuits list-group">
                {tuitList.map(tuit =>
                    <li>
                        <p>{tuit.tuit}</p>
                        <div>
                            Likes: {tuit.likes}
                            <i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                likes: tuit.likes + 1
                            })} className="far fa-thumbs-up ms-2"></i>
                            <i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                likes: tuit.likes - 1
                            })} className="far fa-thumbs-down ms-2"></i>
                        </div>
                        <button onClick={() => deleteTuit(dispatch, tuit)}
                            className="delete-tuit-button">
                            Delete Tuit
                        </button>
                    </li>

                )};
            </ul>

            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">
                Tuit
            </button>

            <textarea className="form-control w-75"
                onChange={(e) =>
                    setNewTuit({
                        ...newTuit,
                        tuit: e.target.value
                    })}></textarea>
        </>
    );
}

export default TuitList;