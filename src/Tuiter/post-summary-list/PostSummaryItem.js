import post from "./post.json";

const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/React_Icon.png"
    }
}) => {
    return (
        <li>
            <div class="wd-suggested-post">
                <p>{post.topic}</p>
                <p><span class="wb-suggested-author">{post.userName}</span> {post.time}</p>
                <h1>{post.title}</h1>
            </div>
            <img src={post.image} />
        </li>
    )
}

export default PostSummaryItem;