import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <div className="col-md-10 col-xl-6">
            <div className="wd-explore_head">
                <div className="wb-search">
                    <i className="fa fa-search"></i>
                    <input type="text" className="wb-search-bar"
                        placeholder="Search Tuiter" />
                    <a href="explore-settings.html">
                        <i className="fa fa-wrench"></i>
                    </a>
                </div>

                <div className="wb-links">
                    <a href="for-you.html" id="wb-links-current">For you</a>
                    <a href="trending.html">Trending</a>
                    <a href="news.html">News</a>
                    <a href="sports.html">Sports</a>
                    <a href="entertainment.html">Enterainment</a>
                </div>
            </div>
            <div className="wd-main-img">
                <img src="../../images/../../images/SpaceX_Starship.jpeg" alt="" />
                <h1>SpaceX's Starship</h1>
            </div>
            <div className="wd-suggested">
                <PostSummaryList />
            </div>
        </div>
    );
}
export default ExploreComponent;

