import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
    <div class="row">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
            ${ExploreComponent()}
        <div class="d-md-none d-lg-block d-lg-none d-xl-block col-xl-3 follow-container">
            ${WhoToFollowList()}
        </div>  
    </div>  
    `);
})($);
