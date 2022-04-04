import React from 'react';
const WhoToFollowListItem = ({
    who = {
        "avatarIcon": "../../images/Java_Icon.png",
        "userName": "Java",
        "handle": "java"
    }
}) => {
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
}

export default WhoToFollowListItem;
