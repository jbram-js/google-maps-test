import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export const MapContainer = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "90vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 53.4808,
    lng: -2.2426,
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 53.46476,
        lng: -2.30819,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 53.462861,
        lng: -2.290976,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 53.479133,
        lng: -2.244429,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 53.480888,
        lng: -2.236731,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 53.487728,
        lng: -2.24247,
      },
    },
  ];
  return (
    <LoadScript googleMapsApiKey="AIzaSyA53AnKK-X02W-FLqPLvopdkNYbJqkZMK8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
