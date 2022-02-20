import React from "react";
import './SideBar.css';
import { SIDE_MENU } from "../../constant";
import { useNavigate } from "react-router-dom";

export const SideBar = ({tab}) => {

    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            <div>
                <button className="compose-btn" data-bs-toggle="modal" data-bs-target="#composeMailModal"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" /><span>Compose</span></button>
                
            </div>
            <br/>
            <>
            {SIDE_MENU.map(item => 
            <div className={item.key === tab ? "side-menu-bar selected-tab" : "side-menu-bar"} key={item.key} onClick={() => navigate(`/mail/${item.key}`)} >
                <div className=""><img src={item.image} alt={item.name} /><span>{item.name}</span></div> 
            </div>
            )}
            </>
        </div>
    )
}