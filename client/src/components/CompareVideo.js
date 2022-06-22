import react, {useEffect, useState} from 'react';
import VideoItem from './VideoItem';

function CompareVideo({API}){
    const [videos, setVideos] = useState([]);
    const currentUser = null;
    const [acceptingResponse, setAcceptingResponse] = useState(true)

    useEffect(()=>{
        fetchRandom()
    }, [])

    function fetchRandom(){
        fetch(API+ "get2")
        .then(r => r.json())
        .then(setVideos)
    }
    function createComparison(winningID){
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
        })
    }

    function handleWin(winningID){
        if (acceptingResponse){
            console.log(videos);
            setAcceptingResponse(false)
            createComparison(winningID);
            setTimeout(() => {
                fetchRandom();
                setAcceptingResponse(true)
            }, 1000);
        }
    }

    return <div className="compare_container">
        {videos.map(v => {
            return <VideoItem 
            key={v.id} 
            video={v} 
            handleClick={()=> handleWin(v.id)} />
        })}
    </div>
}

export default CompareVideo;