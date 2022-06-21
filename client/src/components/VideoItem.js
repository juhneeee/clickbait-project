import React from "react";

function VideoItem({video}){
    const [thumbnail, title, url] = video
    console.log("video item loaded")

    return <div className="card">
        <img src={thumbnail} alt={title}></img>
        <p3>{title}</p3>
    </div>
}

export default VideoItem;