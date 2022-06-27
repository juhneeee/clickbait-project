import react, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import MatchUp from './MatchUp';
import EditForm from './EditForm';

function VideoPage({API, user, fetchVideos}){
    const [video, setVideo] = useState({})
    const params = useParams()
    const {thumbnail, title, stats, matchups} = video
    const [toggleForm, setToggleForm] = useState(false)

    const history = useHistory()

    useEffect(()=>{
        fetchShow()
    }, [])

    function fetchShow(){
        fetch(API+"videos/"+params.id)
        .then(r=>r.json())
        .then(setVideo)
    }

    function handleDelete(){
        history.push("/videos")
        fetch(API+"videos/"+params.id, {method:"DELETE"})
    }

    if (!stats) {return <></>}
    const {impressions, click_through_rate} = stats

    return <div className="hundred">
        <div className="fourty">
            <img src={thumbnail} alt={title} ></img>
        </div>
        <div className="sixty">
            <h3 >{title}</h3>
            <p>{impressions} impressions</p>
            <p>{(click_through_rate*100).toFixed(1)}% click-through-rate</p>
        </div>
        {user == video.uploader_id && <div className='hundred'>
            <button onClick={()=>setToggleForm(a=>!a)}>Edit Video</button>
            <button onClick={handleDelete}>Remove Video</button>
            {toggleForm &&
            <EditForm API={API} video={video} fetchVideos={fetchVideos} fetchShow={fetchShow}/>
            }
        </div>}
        <div className='hundred'>
        <div className='center'>
            <h1>Match-Ups</h1>
        </div>
            {matchups.map(m => <MatchUp key={m.id} matchup={m}/>)}
        </div>
    </div>
}

export default VideoPage;