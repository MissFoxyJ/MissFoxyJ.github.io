import React from "react";
//import {BrowserRouter, Route, Link} from "react-router-dom";
import { menuItems } from "../menuItems";
import MenuItems from './MenuItem';

function Navbar(){
    return (
        <nav>
            <ul className="menus">
                
                {menuItems.map((menu, index) =>{
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel ={depthLevel} />;
                })}
                
            </ul>
        </nav>
    );
};
export default Navbar;
