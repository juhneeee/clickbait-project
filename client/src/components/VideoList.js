import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

function VideoList({API, videos, fetchVideos, user}){
    const [sortBy, setSortBy] = useState("click_through_rate")
    
    useEffect(()=>{
        console.log("video list loading")
        fetchVideos()
    }, [])


    videos.sort((a,b)=> a.stats[sortBy] > b.stats[sortBy] ? -1 : 1)

    return <div>
        <p>current api: {API}</p>
        {videos.map(v=>{
            return <ListItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;