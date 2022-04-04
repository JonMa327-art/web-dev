// import React from "react";
// import { Link } from "react-router-dom";
// import ExploreScreen from "./ExploreScreen";
// import './CSS/explore.css'

// const Tuiter = () => {
//     return (
//         <>
//             <ExploreScreen />
//             <Link to="/hello">
//                 Hello
//             </Link> |
//             <Link to="/labs">
//                 lab
//             </Link>
//         </>
//     )
// };
// export default Tuiter;
import React from 'react';
import "./CSS/explore.css";
import "./CSS/bookmark.css";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import HomeScreen from "./home-screen";
import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import NavigationReducer from "./reducers/NavigationList-reducer";
import { createStore, combineReducers }
    from "redux";
import { Provider } from "react-redux";
const reducers =
    combineReducers({ whoReducer, NavigationReducer, tuitReducer })
const store = createStore(reducers);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    {/* <Outlet /> */}
                    <HomeScreen />
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
};
export default Tuiter;



