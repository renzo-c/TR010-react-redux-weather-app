import React, { useEffect, useRef } from "react";

const GoogleMap = (props) => {
  const { lat, lon } = props;
  const map = useRef(null);

  useEffect(() => {
    new window.google.maps.Map(map.current, {
      zoom: 10,
      center: {
        lat: lat,
        lng: lon,
      },
    });
  }, []);

  return (
    <div
      ref={map}
      style={{
        height: "200px",
        width: "250px",
        margin: "auto",
        borderRadius: "15px",
      }}
    />
  );
};

export default GoogleMap;
