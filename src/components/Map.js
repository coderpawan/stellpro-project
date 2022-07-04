import React from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";

export default function Map({ Latitude, Longitude }) {
  const defaultProps = {
    center: {
      lat: 28.737324,
      lng: 77.090981,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      {console.log(Latitude, Longitude)}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={28.737324} lng={77.090981} text="My Marker" /> */}
        <MdLocationOn
          lat={Latitude}
          lng={Longitude}
          className="text-5xl font-bold text-red-500"
        />
      </GoogleMapReact>
    </div>
  );
}
