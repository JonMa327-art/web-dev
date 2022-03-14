const WhoToFollowListItem = ({
    who = {
        "avatarIcon": "../../images/Java_Icon.png",
        "userName": "Java",
        "handle": "java"
    }
}) => {
    return (
        < div class="list-group-item follow-item" >
            <img src={who.avatarIcon} />
            < div class="follow-tag-button-container" >
                <div class="follow-tag">
                    <h2>{who.userName}</h2>
                    <p>{who.handle}</p>
                </div>
                <button class="btn btn-primary follow-button">
                    <p>Follow</p>
                </button>
            </div >
        </div >
    );
}

export default WhoToFollowListItem;
