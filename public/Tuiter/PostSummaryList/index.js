import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
        <ul>
        ${post.map(post => {
        return (PostSummaryItem(post));
    }).join('')
        }

        </ul>
    `);
}
export default PostSummaryList;


