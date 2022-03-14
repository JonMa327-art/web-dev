import React from "react";
import NavigationList from "./NavigationList.js";

const NavigationSidebar = () => {
    return (
        <>
            <div className="list-group">
                <NavigationList />
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>);
}


export default NavigationSidebar