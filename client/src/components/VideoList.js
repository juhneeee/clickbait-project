import React, {useEffect, useState} from "react";
import VideoItem from "./VideoItem";
// const API = "https://vast-wave-75628.herokuapp.com/"
const API = "localhost:3000/"

function VideoList(){
    const [videos, setVideos] = useState([])
    console.log("video list loaded")

    function fetchVideos(){
        fetch(API + "videos")
        .then(r => r.json())
        .then(d => {
            console.log(d)
            setVideos(d)
        })
    }
    
    useEffect(()=>{
        fetchVideos()
    }, [])

    return <div>
        {videos.map(v=>{
            return <VideoItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;