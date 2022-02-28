import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="col-md-10 col-xl-6">
                <div class="wd-explore_head">
                    <div class="wb-search">
                        <input type="text" style="font-family: FontAwesome;" class="wb-search-bar" name="" id=""
                            placeholder="&#128269     Search Tuiter">
                        <a href="explore-settings.html">
                            &#9881
                        </a>
                    </div>

                    <div class="wb-links">
                        <a href="for-you.html" id="wb-links-current">For you</a>
                        <a href="trending.html">Trending</a>
                        <a href="news.html">News</a>
                        <a href="sports.html">Sports</a>
                        <a href="entertainment.html">Enterainment</a>
                    </div>
                </div>
                <div class="wd-main-img">
                    <img src="../../images/SpaceX_Starship.jpeg" alt="">
                    <h1>SpaceX's Starship</h1>
                </div>
                <div class="wd-suggested">
                     ${PostSummaryList()}
                </div>
           </div>
    `);
}
export default ExploreComponent;



{/* <div class="wd-main-img">
    <img src="../images/SpaceX_Starship.jpeg" alt="">
        <h1>SpaceX's Starship</h1>
</div> */}