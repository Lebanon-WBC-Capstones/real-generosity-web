import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

const tripoli = { lat: 34.4346, lng: 35.8362 };
const zgharta = { lat: 34.3963, lng: 35.8958 };

const ItemsMap = React.memo(function Map() {
  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    {
      zoom: 11,
      center: tripoli,
    }
  );

  if (map) {
    new google.maps.Marker({ position: tripoli, map });
    new google.maps.Marker({ position: zgharta, map });
  }

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '450px',
          height: 650,
          float: 'right',
          marginTop: 7,
          borderTopLeftRadius: 5,
        }}
      />
    </div>
  );
});

export default ItemsMap;
