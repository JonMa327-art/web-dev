import NavigationLinks from "./NavigationLinks.json";

const NavigationList = () => {
    return (
        NavigationLinks.map(link => {
            return (links(link));
        })
    );
}
export default NavigationList;


const links = (link) => {
    return (
        <div className="list-group-item tuiter-links">
            <i className={link.icon}></i>
            <a href="" className="d-none d-xxl-inline-block">
                {link.name}
            </a>
        </div>
    );
}