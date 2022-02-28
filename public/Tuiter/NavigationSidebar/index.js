import NavigationList from "./NavigationList.js";

const NavigationSidebar = () => {
    return (`<div class="list-group">
                ${NavigationList()}
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>`);
}
export default NavigationSidebar;