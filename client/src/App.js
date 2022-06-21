import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';


function App() {
  const [videos, setVideos] = useState([])
  const API = "http://localhost:3000/"

  function fetchVideos(){
      console.log("fetching videos")
      fetch(API + "videos")
      .then(r => r.json())
      .then(d => {
          console.log(d)
          setVideos(d)
      })
  }

  return (
    <div className="App">
      <VideoForm fetchVideos={fetchVideos} API={API}/>
      <VideoList videos={videos} fetchVideos={fetchVideos} API={API}/>
    </div>
  );
}

export default App;
