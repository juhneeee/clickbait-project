import React, { useState } from "react";

function ListItem({video}){
    const {thumbnail, title, stats} = video
    const {click_through_rate, impressions, clicks} = stats

    function handleClick(){
        // route to video details/:id component
        // 
        console.log(video)
    }

    return <div 
        className="list-item">
            <div className="fourty">
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
            </div>
            <div className="sixty">
        <h2 onClick={handleClick}>{title}</h2>
        <p>{impressions} impressions</p>
        <p>{(click_through_rate*100).toFixed(1)}% click-through-rate</p>
            </div>
    </div>
}

export default ListItem;