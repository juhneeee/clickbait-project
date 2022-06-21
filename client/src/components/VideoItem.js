import React from "react";

function VideoItem({video}){
    const {thumbnail, title, url} = video

    return <div className="card">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title}></img>
    </div>
}

export default VideoItem;