import { useState, useEffect } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';

export const useLocation = (query) => {
  const [item, loading] = useDocumentData(query);
  const [cityName, setCityName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    if (!loading) {
      const {
        location: { latitude, longitude },
      } = item;
      setIsLoading(true);
      const fetchLocation = async () => {
        try {
          const result = await (
            await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}
                &key=${API_KEY}`
            )
          ).json();

          if (result) {
            const location = result?.results[1]?.formatted_address;
            setCityName(location);
            setIsLoading(false);
          }
        } catch (error) {
          console.log('useLocation error', error);
        }
      };

      fetchLocation();
      console.log('renders...');
    }
  }, [item, loading]);

  return { cityName, isLoading };
};
