import { useEffect, useState } from 'react';
import { getApiData } from '@/api/getApiData';

export const useCarousel = (type) => {
  const [cardAccount, setCardAccount] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { response } = await getApiData(type);
        setCardAccount(response);
      } catch (error) {
        console.error(
          `Error al cargar la información del carousel ${type}`,
          error
        );
      }
    };

    getData();
  }, [type]);

  return { cardAccount };
};
