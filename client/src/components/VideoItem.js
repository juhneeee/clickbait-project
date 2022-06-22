import React, { useState } from "react";

function VideoItem({video, handleClick}){
    const {thumbnail, title} = video
    const [isGreen, setIsGreen] = useState(false)



    return <div 
        className={isGreen ? "card green" : "card"}
        onClick={() => setIsGreen(true)}>
        <h5 onClick={handleClick}>{title}</h5>
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
    </div>
}

export default VideoItem;