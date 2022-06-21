import React, {useState} from "react";
const youtubeAPI = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBRtr7ks8BNgFQd06r36SwIp58Iy2bimSY&id="
// const API = "https://vast-wave-75628.herokuapp.com/"
// const API = "http://localhost:3000/"

function VideoForm({fetchVideos, API}) {
    const [urlInput, setUrlInput] = useState("")

    function handleSubmit(e){
        e.preventDefault()
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
    }

    function addVideo(obj){
        fetch(API + "videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(fetchVideos)
        //then do something i guess
    }
    

    return <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="url" value={urlInput} onChange={(e)=>setUrlInput(e.target.value)}></input>
        <input type="text" name="title" placeholder="title"></input>
        <input type="text" name="thumbnail" placeholder="thumbnail"></input>
        <button type="submit">Submit</button>
    </form>
}

export default VideoForm;

