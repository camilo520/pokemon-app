import { useState } from 'react';
import type { PokemonDetails } from '../../types/PokemonsDetails';
import './GridComponent.css';

interface Props {
  data: PokemonDetails[];
  onSelect: (pokemon: PokemonDetails) => void;
}

export const GridComponent = ({ data, onSelect }: Props) => {
  const [visibleCount, setVisibleCount] = useState(40);

  //---Muestra los primeros 40 Pokémones y va cargando de 40 más---
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 40);
  };

  return (
    <>
      <div className="grid-container">
        {data.slice(0, visibleCount).map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemon-card"
            onClick={() => onSelect(pokemon)}
          >
            <div className="card-id">#{pokemon.id}</div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="card-image"
            />
            <div className="card-name">{pokemon.name}</div>
          </div>
        ))}
      </div>
      {visibleCount < data.length && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '5px',
            marginBottom: '30px',
          }}
        >
          <button className="load-button" onClick={handleLoadMore}>
            Cargar más
          </button>
        </div>
      )}
    </>
  );
};
