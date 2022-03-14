import WhoToFollowLinks from "./WhoToFollowLinks.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <>
            <h1 class="follow-title">Who to follow</h1>
            <div class="list-group">
                {
                    WhoToFollowLinks.map(who => {
                        return (<WhoToFollowListItem who={who} />);
                    })
                }
            </div>
        </>

    );
}

export default WhoToFollowList;