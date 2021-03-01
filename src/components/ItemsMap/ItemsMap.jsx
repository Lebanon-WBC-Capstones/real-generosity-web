import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { items } from '../../assets/data/items';
export const ItemsMap = () => {
  const defaultCenter = {
    lat: 34.4346,
    lng: 35.8362,
  };
  const mapStyles = {
    height: '80vh',
    width: '40vw',
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        >
          {items.map((item) => {
            return (
              <Marker
                key={Date.now() + '' + Math.random()}
                position={item.location.coords}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default ItemsMap;
