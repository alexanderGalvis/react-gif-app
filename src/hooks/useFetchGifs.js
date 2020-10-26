import { useState, useEffect } from 'react';
import { getGits } from '../services/GifsService';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGits(category).then((data) => {
      setState({ data: data, loading: false });
    });
  }, [category]);

  return state;
};
