import React from "react";

import './menu-item.style.css'

const MenuItem = ({id, title, image, size}) => (
    <div className={`${size} menu-item`}>
        <div className="backgroudImage" 
        style={{backgroundImage: `url(${image})`}}
        /> 
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem