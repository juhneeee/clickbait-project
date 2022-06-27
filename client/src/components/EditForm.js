import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function EditForm({user, API, fetchVideos, video, fetchShow}) {
    const [titleInput, setTitleInput] = useState(video.title)
    const [thumbnailInput, setThumbnailInput] = useState(video.thumbnail)
    const [feedback, setFeedback] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        editVideo({title: titleInput, thumbnail: thumbnailInput})
    }

    function editVideo(obj){
        fetch(API + "videos/" + video.id, {
            method: "PATCH",
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
                fetchVideos()
                fetchShow()
                setFeedback("Update successful!")
            }
        })
    }
    

    return <div className="form">
        <div className="center">
        </div>
            <form className="hundred" onSubmit={handleSubmit}>
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

export default EditForm;

