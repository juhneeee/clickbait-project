import react, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import MatchUp from './MatchUp';

function VideoPage({API, user}){
    const [video, setVideo] = useState({})
    const params = useParams()
    const {thumbnail, title, stats, matchups} = video
    console.log(video)

    useEffect(()=>{
        fetch(API+"videos/"+params.id)
        .then(r=>r.json())
        .then(setVideo)
    }, [])

    if (!stats) {return <></>}
    return <div className="hundred">
        <div className="fourty">
            <img src={thumbnail} alt={title} ></img>
        </div>
        <div className="sixty">
            <h3 >{title}</h3>
            <p>{stats.impressions} impressions</p>
            <p>{(stats.click_through_rate*100).toFixed(1)}% click-through-rate</p>
        </div>
        <div className='hundred'>
            buttons for user to edit or delete
        
        </div>
        <div className='hundred'>
            matchups
            {matchups.map(m => <MatchUp key={m.id} matchup={m}/>)}
        </div>
    </div>
}

export default VideoPage;