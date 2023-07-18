import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import { setClientToken } from "./components/spotify";
import Login from "./components/auth/Login";
import PlayerState from "./context/PlayerState";
import BellaState from "./context/BellaState";
import Controls from "./components/Controls";
import Actions from "./components/playlist/Actions";
import Playlist from "./components/playlist/NewRelease";
import Currently from "./Pages/Currently";
import { useState, useEffect } from "react";
import Search from "./Pages/Search";
import Collection from "./Pages/Collection";
import Collections from "./Pages/Collections";
import NewRelease from "./components/playlist/NewRelease";

import AnimatedRoutes from "./Pages/AnimatedRoutes";

function App() {
  
       return  (
    <>
      <PlayerState>
        <Router>
          <Sidebar />

          <AnimatedRoutes />
        
        </Router>

        <Actions />
        <Controls />
      </PlayerState>
    </>
  );
}

export default App;
