import React, {useState} from "react";
import ListItem from "./ListItem";

function VideoList({videos, user}){
    const [sortBy, setSortBy] = useState("click_through_rate")
    const [isFiltered, setIsFiltered] = useState(false)

    if (!videos){return <></>}

    let videosToDisplay = isFiltered? videos.filter(v => v.uploader_id == user): videos

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
            onClick={()=>setIsFiltered(a => !a)}>
                {isFiltered?"All Videos":"My Videos"}
            </button>}
        </div>
        {videosToDisplay.map(v=>{
            return <ListItem key={v.url} video={v} />
        })}
    </div>
}

export default VideoList;