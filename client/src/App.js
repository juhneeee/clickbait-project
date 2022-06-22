import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';
import CompareVideo from "./components/CompareVideo";


function App() {
  const [videos, setVideos] = useState([])
  // const API = "http://localhost:3000/"
  const API = "https://vast-wave-75628.herokuapp.com/"
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(API + "me")
    .then(r => {
      if (r.ok) {
        r.json()
        .then(setUser);
      }
    });
  }, []);

  function fetchVideos(){
    fetch(API + "videos")
    .then(r => r.json())
    .then(d => {
        setVideos(d)
    })
  }

  return (
    <div className="App">
      <CompareVideo API={API}/>
      <VideoForm fetchVideos={fetchVideos} API={API}/>
      <VideoList videos={videos} fetchVideos={fetchVideos} API={API}/>
    </div>
  );
}

export default App;
