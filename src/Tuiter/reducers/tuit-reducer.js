// import tuits from '../data/tuits.json'

// const tuitReducer = (state = tuits, action) => {
//     switch (action.type) {
//         case 'like-tuit':
//             return state.map(tuit => {
//                 if (tuit._id === action.tuit._id) {
//                     if (tuit.liked === true) {
//                         tuit.liked = false;
//                         tuit.stats.likes--;
//                     } else {
//                         tuit.liked = true;
//                         tuit.stats.likes++;
//                     }
//                     return tuit;
//                 } else {
//                     return tuit;
//                 }
//             });

//         case 'delete-tuit':
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id);
//         case 'create-tuit':
//             const newTuit = {
//                 tuit: action.tuit,
//                 _id: (new Date()).getTime() + '',
//                 postedBy: {
//                     "username": "ReactJS"
//                 },
//                 stats: {
//                     retuits: 111,
//                     likes: 222,
//                     replies: 333
//                 }
//             }
//             return [
//                 newTuit,
//                 ...state,
//             ];
//         default:
//             return tuits
//     }

// }

// export default tuitReducer;


// const tuitReducer = (state = tuits, action) => {
//     switch (action.type) {
//         case 'like-tuit':
//             return state.map(tuit => {
//                 if (tuit._id === action.tuit._id) {
//                     if (tuit.liked === true) {
//                         tuit.liked = false;
//                         tuit.stats.likes--;
//                     } else {
//                         tuit.liked = true;
//                         tuit.stats.likes++;
//                     }
//                     return tuit;
//                 } else {
//                     return tuit;
//                 }
//             });

//         case 'delete-tuit':
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id);
//         case 'create-tuit':
//             const newTuit = {
//                 tuit: action.tuit,
//                 _id: (new Date()).getTime() + '',
//                 postedBy: {
//                     "username": "ReactJS"
//                 },
//                 stats: {
//                     retuits: 111,
//                     likes: 222,
//                     replies: 333
//                 }
//             }
//             return [
//                 newTuit,
//                 ...state,
//             ];

//         case 'FIND_ALL_TUITS':
//             return action.tuits;
//         default:
//             return state;
//     }

// }

// export default tuitReducer;
import { UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS } from "../action/tuits-action.js";

const tuitReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];

        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

        default:
            return state;
    }
}
export default tuitReducer;