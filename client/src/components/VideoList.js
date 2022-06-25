import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";

function VideoList({API, videos, fetchVideos, user}){
    const [sortBy, setSortBy] = useState("click_through_rate")
    const [isFiltered, setIsFiltered] = useState(false)
    
    useEffect(()=>{
        console.log("video list loading")
        fetchVideos()
    }, [])

    if (!videos){return <></>}
    let videosToDisplay = videos
    if (isFiltered){
        videosToDisplay = videos.filter(v => v.uploader_id == user)
    }
    if(sortBy=="click_through_rate"){
        // CTR descending
        videosToDisplay.sort((a,b) => a.stats[sortBy]>b.stats[sortBy]? -1: 1)
    }
    if(sortBy=="impressions"){
        // newest to oldest (impressions asc)
        videosToDisplay.sort((a,b) => a.stats[sortBy]<b.stats[sortBy]? -1: 1)
    }


    return <div>
        <div className="hundred">
            <button onClick={()=>setSortBy("click_through_rate")}>Top Videos</button>
            <button onClick={()=>setSortBy("impressions")}>Newest Videos</button>
            {user&& <button 
            onClick={()=>setIsFiltered(!isFiltered)}>
                {isFiltered?"All Videos":"My Videos"}
            </button>}
        </div>
        {videos.map(v=>{
            return <ListItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;