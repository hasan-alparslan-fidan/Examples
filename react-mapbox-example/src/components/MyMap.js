import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, [viewport]);
  // debugger
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <Map
            mapboxApiAccessToken="pk.eyJ1IjoiaGFzYW5pa29mIiwiYSI6ImNsYjVpcGdobDA3N2EzcW9kbTFjaDFuNzkifQ.egAUfbwTThp06LC9yf0XGw"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;
