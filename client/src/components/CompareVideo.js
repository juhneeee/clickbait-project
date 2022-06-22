import react, {useEffect, useState} from 'react';
import VideoItem from './VideoItem';

function CompareVideo({API}){
    const [videos, setVideos] = useState([]);
    const currentUser = null;

    useEffect(()=>{
        fetchRandom()
    }, [])

    function fetchRandom(){
        fetch(API+ "get2")
        .then(r => r.json())
        .then(setVideos)
    }

    function handleWin(winningID){
        const body = {
            video_a_id: videos[0].id,
            video_b_id: videos[1].id,
            winner: winningID,
            user_id: currentUser
        }
        fetch(API + "comparisons", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
        .then(console.log)
    }

    return <div>
        {videos.map(v => {
            return <VideoItem 
            key={v.id} 
            video={v} 
            handleClick={()=> handleWin(v.id)} />
        })}
    </div>
}

export default CompareVideo;