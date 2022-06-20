import React, {useState} from "react";
const API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBRtr7ks8BNgFQd06r36SwIp58Iy2bimSY&id="

function VideoForm() {
    const [urlInput, setUrlInput] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        const id = urlInput
        console.log({id: id})
        // fetch(API + id)
        
    }
    

    return <form onSumbit={handleSubmit}>
        <input type="text" name="url" placeholder="url" value={urlInput} onChange={(e)=>setUrlInput(e.target.value)}></input>
        <input type="text" name="title" placeholder="title"></input>
        <input type="text" name="thumbnail" placeholder="thumbnail"></input>
        <button type="submit">Submit</button>
    </form>
}

export default VideoForm;

