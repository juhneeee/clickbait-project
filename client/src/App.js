import React, {useEffect, useState} from "react";
import { Switch , Route } from "react-router-dom";
import './App.css';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';
import CompareVideo from "./components/CompareVideo";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import VideoPage from "./components/VideoPage";

function App() {
  const [videos, setVideos] = useState([])
  const API = "http://localhost:3000/api/"
  // const API = "https://vast-wave-75628.herokuapp.com/api/"
  const [user, setUser] = useState(null);
  // user is saved as id

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
      <NavBar API={API} user={user} setUser={setUser} />
      {user && <p>hello {user}</p>}
      <Switch>
        <Route path="/new">
          <VideoForm user={user} fetchVideos={fetchVideos} API={API}/>
        </Route>

        <Route path="/videos/:id">
          <VideoPage user={user} API={API} />
        </Route>

        <Route path="/videos">
          <VideoList user={user} videos={videos} fetchVideos={fetchVideos} API={API}/>
        </Route>

        <Route path="/login">
          <LoginForm API={API} setUser={setUser}/>
        </Route>

        <Route path="/">
          <CompareVideo user={user} API={API}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
