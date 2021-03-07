import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 34.4346,
  lng: 35.8362,
};
const mapStyles = {
  height: '80vh',
  width: '500px',
};

export const ItemsMap = ({ items }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const render = React.useRef(0);
  console.log('ItemsMap.jsx has re-rendered: ', render.current++);

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={11} center={center}>
        {items.map((item) => {
          return <Marker key={item.id} position={item.data().location} />;
        })}
      </GoogleMap>
    </div>
  ) : (
    <>map is loading...</>
  );
};
export default React.memo(ItemsMap);
