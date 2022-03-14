import WhoToFollowLinks from "./WhoToFollowLinks.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <>
            <h1 className="follow-title">Who to follow</h1>
            <div className="list-group">
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