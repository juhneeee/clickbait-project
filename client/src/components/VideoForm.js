import React, {useState} from "react";
import { useHistory } from "react-router-dom";
const youtubeAPI = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBRtr7ks8BNgFQd06r36SwIp58Iy2bimSY&id="

function VideoForm({user, API}) {
    const [urlInput, setUrlInput] = useState("")
    const [titleInput, setTitleInput] = useState("")
    const [thumbnailInput, setThumbnailInput] = useState("")
    const [feedback, setFeedback] = useState("")

    const history = useHistory()

    function thumbnailPicker(obj){
        const res = ["maxres", "high", "medium", "standard"]
        for (let e of res){ 
            if(obj[e]){
                console.log(obj[e])
                return obj[e]
            }
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if (urlInput){
            const id = urlInput.match(/=[a-z0-9_]+/i)[0].slice(1)
            // console.log({id: id})
            fetch(youtubeAPI + id)
            .then(r => r.json())
            .then(data => {
                if (data.items[0]){
                const snippet = data.items[0].snippet
                const thumbnail = thumbnailPicker(snippet.thumbnails)
                const videoObj = {
                    title: snippet.title,
                    thumbnail: thumbnail.url,
                    url: id,
                    uploader_id: user
                }
                addVideo(videoObj)
                }
                else {
                    setFeedback("Invalid url")
                }
            })
        } else {
            const videoObj = {
                title: titleInput,
                thumbnail: thumbnailInput,
                uploader_id: null
            }
            addVideo(videoObj)
        }
        setUrlInput("")
        setTitleInput("")
        setThumbnailInput("")
    }

    function addVideo(obj){
        fetch(API + "videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(r=> r.json())
        .then(d =>{
            if (d.error){setFeedback(d.error)
            } else {
                console.log(d)
                setTimeout(()=>{
                    history.push('/videos/'+d.id)
                }, 50)               
            }
        })
    }
    

    return <div className="form">
        <div className="center">
        <h1>Upload a video</h1>
        <p>You can upload a video with just video URL. or both Title and Thumbnail.</p>
        </div>
            <form className="hundred" onSubmit={handleSubmit}>
            <label >Youtube URL:</label>
            <input type="text" name="url" placeholder="url" value={urlInput} onChange={(e)=>setUrlInput(e.target.value)}></input>
            <label >Title:</label>
            <input type="text" name="title" placeholder="title" value={titleInput} onChange={e=>setTitleInput(e.target.value)}></input>
            <label >Thumbnail:</label>
            <input type="text" name="thumbnail" placeholder="thumbnail" value={thumbnailInput} onChange={e=>setThumbnailInput(e.target.value)}></input>
        <div className="center">
            <button type="submit">Submit</button>
            <p>{feedback}</p>
        </div>
        </form>
    </div>
}

export default VideoForm;

