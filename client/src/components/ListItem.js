import React, { useState } from "react";

function ListItem({video, handleWin}){
    const {thumbnail, title} = video
    const [isGreen, setIsGreen] = useState(false)

    function handleClick(){
        handleWin()
        setIsGreen(true)
        setTimeout(()=>{setIsGreen(false)}, 1000)
    }

    return <div 
        className={isGreen ? "card green" : "card"}>
        <h5 onClick={handleClick}>{title}</h5>
        <img src={thumbnail} alt={title} onClick={handleClick}></img>
    </div>
}

export default ListItem;