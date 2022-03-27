import React from "react";
import { useDispatch } from "react-redux";



const TuitListItem = ({
    tuit = {
        "_id": "123",
        "topic": "Web Development",
        "postedBy": {
            "username": "ReactJS"
        },
        "liked": true,
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "attachments": {
            "video": "unKvMC3Y1kI"
        },
        "logo-image": "../../../images/react-blue.png",
        "avatar-image": "../../../images/react-blue.png",
        "stats": {
            "comments": 123,
            "retuits": 234,
            "likes": 345
        }
    },
    key = tuit._id
}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: 'like-tuit', tuit });
    };
    const deleteTuit = (tuit) => {
        dispatch({ type: 'delete-tuit', tuit });
    };
    return (
        <li>
            <div class="wd-bookmark">
                <img src="../JonathanMa.JPG" class="wd-bookmark-profile-pic" alt="" />
                <div class="wd-bookmark-tweet">
                    <h1 class="wd-bookmark-author">
                        {tuit.postedBy.username}
                        <span class="wd-bookmark-handle"> @{tuit.handle}  </span>
                        <span class="wd-bookmark-handle">{tuit.time}</span>

                        <i onClick={() =>
                            deleteTuit(tuit)}
                            className="fa fa-exclamation-triangle delete_button"></i>
                    </h1>
                    <p class="wb-bookmark-message">{tuit.tuit} </p>
                    <div class="wd-bookmark-img-container">
                        <img src="../Enterance.jpeg" class="wd-bookmark-img-tweet" alt="" />
                        {/* <h1 class="wd-bookmark-img-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus,
                            error!
                        </h1>
                        <p class="wd-bookmark-img-message"></p> */}
                    </div>

                    {/* likes, comments, retuits */}
                    <ul class="wd-bookmark-actions">
                        <li>
                            <i className="fa fa-comments"></i>
                            <label for="">
                                <a href=""></a>
                                {tuit.stats.comments}</label>
                        </li>
                        <li>
                            <i className="fa fa-bell"></i>
                            <label for="">
                                <a href=""></a>
                                {tuit.stats.retuits}</label>
                        </li>
                        <li>
                            <span onClick={likeTuit}>
                                {
                                    tuit.liked &&
                                    <i className="fas fa-heart me-1"
                                        style={{ color: 'red' }}></i>
                                }
                                {
                                    !tuit.liked &&
                                    <i className="far fa-heart me-1"></i>
                                }
                                {tuit.stats && tuit.stats.likes}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default TuitListItem;
