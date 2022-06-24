import { useHistory } from "react-router-dom"

function MatchUp({matchup}){
    const {video, win, loss, id} = matchup
    const {thumbnail, title} = video

    const winPercentage = win/(win+loss)
    let history = useHistory()

    function handleClick(){
        history.push('/videos')
        setTimeout(()=>{history.push('/videos/'+id)}, 5)
        
    }

    return <div className="ninety">
    <div className="twenty-five">
        <img className="circle" 
        src={thumbnail} 
        alt={title}
        onClick={handleClick} ></img>
    </div>
    <div className="seventy-five">
        <h3 onClick={handleClick}>{title}</h3>
        <h4> Match-up History</h4>
        <p>Total Comparisons: {win+loss}</p>
        <p>Score: {win}W - {loss}L</p>
        <p>Win Rate: {winPercentage.toFixed(3)*100}%</p>
    </div>
    </div>
}

export default MatchUp;