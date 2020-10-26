import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GitGrid = ({ category }) => {
  /*  const [images, setImages] = useState([]);

    useEffect(() => {
      getGits(category).then((imgs) => {
        setImages(imgs);
      });
    }, [category]);*/

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__shakeX">Cargando...</p>
      )}
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GitGrid;
