import React, { useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import Card from '../Card';
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

  console.log(selected?.id);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const render = React.useRef(0);
  console.log('ItemsMap.jsx has re-rendered: ', render.current++);

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={center}>
        {items.map((item) => {
          return (
            <Marker
              key={item.id}
              position={{
                lat: item.location?.latitude,
                lng: item.location?.longitude,
              }}
              onClick={() =>
                setSelected({
                  title: item.title,
                  location: {
                    lat: item.location?.latitude,
                    lng: items.location?.longitude,
                  },
                  createdAt: item.createdAt,
                  image_url: item.image_url,
                  id: item.id,
                  cityCoords: item.location,
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
            <Card
              key={selected.id}
              id={selected.id}
              title={selected.title}
              createdAt={selected.createdAt}
              image_url={selected.image_url}
              location={selected.cityCoords}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : (
    <>map is loading...</>
  );
};
export default React.memo(ItemsMap);
