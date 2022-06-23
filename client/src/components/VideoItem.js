import React, { useState } from "react";

function VideoItem({video, handleWin}){
    const {thumbnail, title} = video
    const [isGreen, setIsGreen] = useState(false)

    function handleClick(){
        handleWin()
        setIsGreen(true)
        setTimeout(()=>{setIsGreen(false)}, 1000)
    }

    return <div 
        className={isGreen ? "card green" : "card"}>
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
        <h2 className="compare-title" onClick={handleClick}>{title}</h2>
    </div>
}

export default VideoItem;