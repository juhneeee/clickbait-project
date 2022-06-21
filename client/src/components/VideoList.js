import React, {useEffect, useState} from "react";
import VideoItem from "./VideoItem";
// const API = "https://vast-wave-75628.herokuapp.com/"
// const API = "http://localhost:3000/"

function VideoList({API, videos, fetchVideos}){
    
    useEffect(()=>{
        console.log("video list loading")
        fetchVideos()
    }, [])

    return <div>
        <p>current api: {API}</p>
        {videos.map(v=>{
            return <VideoItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;