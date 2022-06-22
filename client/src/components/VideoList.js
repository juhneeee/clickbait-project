import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

function VideoList({API, videos, fetchVideos}){
    
    useEffect(()=>{
        console.log("video list loading")
        fetchVideos()
    }, [])

    return <div>
        <p>current api: {API}</p>
        {videos.map(v=>{
            return <ListItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;