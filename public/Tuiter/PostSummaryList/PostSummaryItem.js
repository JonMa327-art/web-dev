import post from "./post.js";

const PostSummaryItem = (post) => {
    return (`
    <li>
        <div class="wd-suggested-post">
            <p>${post.topic}</p>
            <p><span class="wb-suggested-author">${post.userName}</span> ${post.time}</p>
            <h1>${post.title}</h1>
        </div>
        <img src="${post.image}" alt="">
    </li>  
    `)
}

export default PostSummaryItem;