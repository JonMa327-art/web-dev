import NavigationLinks from "./NavigationLinks.js";

const NavigationList = () => {
    return (`
    ${NavigationLinks.map(link => {
        return (links(link));
    }).join('')}
    `);
}
export default NavigationList;

const links = (link) => {
    return (`
    <div class="list-group-item tuiter-links">
        <i class="${link.icon}"></i>
        <a href="" class="d-none d-xxl-inline-block">
            ${link.name}
        </a>
    </div>
    `);
}