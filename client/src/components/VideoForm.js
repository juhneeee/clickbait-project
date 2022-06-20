import react from "react";


function VideoForm() {


    return <form>
        <input type="text" name="url" placeholder="url"></input>
        <input type="text" name="title" placeholder="title"></input>
        <input type="text" name="thumbnail" placeholder="thumbnail"></input>
        <button type="submit"></button>
    </form>
}

export default VideoForm;
