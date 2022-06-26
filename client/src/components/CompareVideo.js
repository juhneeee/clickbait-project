import react, {useEffect, useState} from 'react';
import VideoItem from './VideoItem';

function CompareVideo({user, API}){
    const [videos, setVideos] = useState([]);
    const [acceptingResponse, setAcceptingResponse] = useState(true)

    useEffect(()=>{
        fetchRandom()
    }, [])

    function fetchRandom(){
        fetch(API+ "get2")
        .then(r => r.json())
        .then(setVideos)
        fetch(API+'hello')
        .then(r=>r.json())
        .then(console.log)
    }
    function createComparison(winningID){
        console.log(user)
        const body = {
            video_a_id: videos[0].id,
            video_b_id: videos[1].id,
            winner: winningID,
            user_id: user
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

    return <>
    <h2>Click on the video that interests you more.</h2>
    <div className="compare_container">
        {videos[0] && videos.map(v => {
            return <VideoItem 
            key={v.id} 
            video={v} 
            handleWin={()=> handleWin(v.id)} />
        })}
    </div>
    </>
}

export default CompareVideo;