import React from "react";

function VideoItem({video, handleClick}){
    const {thumbnail, title, url} = video



    return <div className="card">
        <h5 onClick={handleClick}>{title}</h5>
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
    </div>
}

export default VideoItem;