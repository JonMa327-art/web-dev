//list of people to follow
import WhoToFollowLinks from '../data/WhoToFollowLinks.json';

//crates a reducer where the state is equal to the list of potientail followers
const whoReducer = (state = WhoToFollowLinks) => {
    return state;
}

export default whoReducer;