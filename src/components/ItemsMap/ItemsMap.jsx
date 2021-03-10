import React, { useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const center = {
  lat: 34.4346,
  lng: 35.8362,
};
const mapStyles = {
  height: '80vh',
  width: '500px',
};

export const ItemsMap = ({ items }) => {
  const [selected, setSelected] = useState();

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
          return (
            <Marker
              key={item.id}
              position={{
                lat: item.data().location?.latitude,
                lng: item.data().location?.longitude,
              }}
              onClick={() =>
                setSelected({
                  title: item.data().title,
                  location: {
                    lat: item.data().location?.latitude,
                    lng: item.data().location?.longitude,
                  },
                })
              }
            />
          );
        })}
        {selected ? (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected()}
          >
            <p>{selected.title}</p>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : (
    <>map is loading...</>
  );
};
export default React.memo(ItemsMap);
