// import WhoToFollowLinks from "./WhoToFollowLinks.json";
import { useSelector } from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    //gets the state from the reducers
    const whoToFollow = useSelector((state) => state.whoReducer)
    return (
        <>
            <h1 className="follow-title">Who to follow</h1>
            <div className="list-group">
                {
                    //mapping accross the who to follow list from the reducer
                    whoToFollow.map(who => {
                        //whoToFollowListItem is a react component I made and it takes in a parameter called who
                        // return (<WhoToFollowListItem whoObject={who} />);
                        return (
                            < div className="list-group-item follow-item" >
                                <img src={who.avatarIcon} />
                                < div className="follow-tag-button-container" >
                                    <div className="follow-tag">
                                        <h2>{who.userName}</h2>
                                        <p>{who.handle}</p>
                                    </div>
                                    <button className="btn btn-primary follow-button">
                                        <p>Follow</p>
                                    </button>
                                </div >
                            </div >
                        );
                    })
                }
            </div>
        </>

    );
}

export default WhoToFollowList;