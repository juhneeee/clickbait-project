import React, { useState } from "react";

function VideoItem({video, handleWin}){
    const {thumbnail, title} = video
    const [isGreen, setIsGreen] = useState(false)

    function handleClick(){
        handleWin()
        setIsGreen(true)
    }

    return <div 
        className={isGreen ? "card green" : "card"}>
        <h5 onClick={handleClick}>{title}</h5>
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
    </div>
}

export default VideoItem;