import React, {useState} from "react";
const youtubeAPI = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBRtr7ks8BNgFQd06r36SwIp58Iy2bimSY&id="

function VideoForm({fetchVideos, API}) {
    const [urlInput, setUrlInput] = useState("")
    const [titleInput, setTitleInput] = useState("")
    const [thumbnailInput, setThumbnailInput] = useState("")
    const [feedback, setFeedback] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        if (urlInput){
            const id = urlInput.match(/=[a-z0-9_]+/i)[0].slice(1)
            // console.log({id: id})
            fetch(youtubeAPI + id)
            .then(r => r.json())
            .then(data => {
                const snippet = data.items[0].snippet
                // console.log(snippet.thumbnails)
                const videoObj = {
                    title: snippet.title,
                    thumbnail: snippet.thumbnails.medium.url,
                    url: id,
                    uploader_id: null
                }
                // console.log(videoObj)
                addVideo(videoObj)
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
        .then(d =>{
            if (d.error){setFeedback(d.error)
            } else {setFeedback("")}
        })
        .then(fetchVideos)
        .then(r => r.json())
    }
    

    return <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="url" value={urlInput} onChange={(e)=>setUrlInput(e.target.value)}></input>

        <input type="text" name="title" placeholder="title" value={titleInput} onChange={e=>setTitleInput(e.target.value)}></input>

        <input type="text" name="thumbnail" placeholder="thumbnail" value={thumbnailInput} onChange={e=>setThumbnailInput(e.target.value)}></input>

        <button type="submit">Submit</button>
        <p>{feedback}</p>
    </form>
}

export default VideoForm;

