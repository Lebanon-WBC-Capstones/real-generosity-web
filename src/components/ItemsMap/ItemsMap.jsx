import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const ItemsMap = ({ coords, initialCenter, mapSize, mapZoom }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapSize}
          zoom={mapZoom}
          center={initialCenter}
        >
          {coords.map((item) => {
            return (
              <Marker key={Date.now() + '' + Math.random()} position={item} />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default ItemsMap;
