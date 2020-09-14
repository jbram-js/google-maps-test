import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export const MapCurrentLocation = () => {
  const [currentPosition, setCurrentPosition] = useState({});

  const defaultCenter = {
    lat: 53.4808,
    lng: -2.2426,
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const mapStyles = {
    height: "90vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA53AnKK-X02W-FLqPLvopdkNYbJqkZMK8">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapCurrentLocation;
