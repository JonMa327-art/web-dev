import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import ExploreComponent from "./explore-screen";
import WhoToFollowList from "./WhoToFollowList";


const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore" />
            </div>
            <ExploreComponent />
            <div className="d-md-none d-lg-block d-lg-none d-xl-block col-xl-3 follow-container">
                <WhoToFollowList />
            </div>
        </div>
    );
};

export default ExploreScreen
