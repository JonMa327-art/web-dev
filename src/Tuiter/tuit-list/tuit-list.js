// import React from "react";
// import TuitListItem from "./tuit-list-item";
// import { useSelector } from "react-redux";
// // import './tuits.css';

// const TuitList = () => {
// const tuitList = useSelector((state) => state.tuitReducer)
//     return (
/* <ul className="ttr-tuits list-group">
    {
        tuitList.map(tuit =>
            <TuitListItem tuit={tuit} key={tuit._id} />)
    }
</ul> */
//     );
// }

// export default TuitList;



import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as service from "../services/tuit-service.js"
import TuitListItem from "./tuit-list-item";
import { updateTuit, createTuit, deleteTuit, findAllTuits } from "../action/tuits-action.js";

const TuitList = () => {
    let tuitList = useSelector((state) => state.tuitReducer)
    // const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({ tuit: 'New tuit' });

    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     console.log(tuits)
    //     tuitList = tuits;
    //     console.log(tuitList)

    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    // useEffect(findAllTuits, []);

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

// import React from "react";
// import { useEffect, useState } from "react";
// import * as service from "../../services/tuit-service.js"
// const TuitList = () => {
//     //make the start of the list of tuits
//     const [tuits, setTuits] = useState([]);

//     //because it is async it get called automatically
//     //Also sets tuits to a list of tuits found by the tuit-services fuction
//     const findAllTuits = async () => {
//         const tuits = await service.findAllTuits();
//         console.log(tuits)
//         setTuits(tuits)
//     }

//     useEffect(findAllTuits, []);
//     // const tuitList = useSelector((state) => state.tuitReducer)
//     return (
//         <h1>here {tuits.length}</h1>
//         // <ul className="ttr-tuits list-group">
//         //     {
//         //         tuitList.map(tuit =>
//         //             <TuitListItem tuit={tuit} key={tuit._id} />)
//         //     }
//         // </ul>
//     );
// }

// export default TuitList;