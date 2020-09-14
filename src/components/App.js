import React from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import MapContainer from "./MapContainer";
import MapCurrentLocation from "./MapCurrentLocation";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <switch>
        <Route exact path="/map" component={MapContainer} />
        <Route
          exact
          path="/map-current-location"
          component={MapCurrentLocation}
        />
      </switch>
    </div>
  );
};

export default App;
