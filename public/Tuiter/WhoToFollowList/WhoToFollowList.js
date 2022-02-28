import WhoToFollowLinks from "./WhoToFollowLinks.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <h1 class="follow-title">Who to follow</h1>
        <div class="list-group">
        ${WhoToFollowLinks.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}
        </div>

    `);
}

export default WhoToFollowList;

