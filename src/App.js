import React, { useEffect } from "react";
import SearchBar from "./containers/SearchBar";
import WeatherList from "./containers/WeatherList";

import Typography from "@material-ui/core/Typography";

const App = () => {
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
  });

  return (
    <div>
      <Typography variant="h4" align="center">
        Canadian Weather Forecast
      </Typography>
      <br />
      <SearchBar />
      <br />
      <WeatherList />
    </div>
  );
};

export default App;
