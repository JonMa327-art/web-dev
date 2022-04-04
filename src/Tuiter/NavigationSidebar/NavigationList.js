// import NavigationLinks from "./NavigationLinks.json";
import React from 'react';
import { useSelector } from "react-redux";

const NavigationList = () => {
    //creates the reducer for the list on links
    const Navlinks = useSelector((state) => state.NavigationReducer)
    //maps over the list of links in the reducer
    return (
        Navlinks.map(link => {
            return (links(link));
        })
    );
}
export default NavigationList;


const links = (link) => {
    return (
        <div className="list-group-item tuiter-links" >
            <i className={link.icon}></i>
            <a href="" className="d-none d-xxl-inline-block">
                {link.name}
            </a>
        </div>
    );
}