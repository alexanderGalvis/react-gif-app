import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GitGrid from './components/GifGrid';

const GitExpertApp = () => {
  //const categiriasDefault = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categorias, setCategorias] = useState(['Gan Torino']);
  /*const handleAdd = () =>{
            setCategorias([...categorias,'Thundercats']);
        }*/
  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategorias={setCategorias}></AddCategory>
      <hr />
      {/*<button onClick={handleAdd}>Agregar</button>*/}
      <ol>
        {categorias.map((category) => (
          <GitGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
