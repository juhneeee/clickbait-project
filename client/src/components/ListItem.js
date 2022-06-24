import React from "react";
import { useHistory } from "react-router-dom";

function ListItem({video}){
    const {thumbnail, title, stats, id} = video
    

    let history = useHistory()

    function handleClick(){
        history.push('/videos/'+id)
    }

    return <div 
        className="list-item">
            <div className="fourty">
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
            </div>
            <div className="sixty">
        <h2 onClick={handleClick}>{title}</h2>
        <p>{stats.impressions} impressions</p>
        <p>{(stats.click_through_rate*100).toFixed(1)}% click-through-rate</p>
            </div>
    </div>
}

export default ListItem;