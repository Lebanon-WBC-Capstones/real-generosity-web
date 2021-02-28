import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapForm = ({ currentPosition, setCurrentPosition, setCityName }) => {
  const mapStyles = {
    height: '55vh',
    width: '50vw',
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const onMouseClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[1].address_components[0].long_name);
        setCityName(data.results[1].address_components[0].long_name);
      });
  };

  const success = () => {
    const currentPos = {
      lat: 34.4346,
      lng: 35.8362,
    };
    setCurrentPosition(currentPos);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={currentPosition}
          onClick={(e) => {
            onMouseClick(e);
          }}
        >
          {currentPosition.lat ? (
            <Marker position={currentPosition} draggable={true} />
          ) : null}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MapForm;
