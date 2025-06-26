import DataTable, { type TableColumn } from 'react-data-table-component';
import type { PokemonDetails } from '../types/PokemonsDetails';

interface Props {
  data: PokemonDetails[];
  loading: boolean;
  onSelect: (pokemon: PokemonDetails) => void;
}

export const GridComponent = ({ data, loading, onSelect }: Props) => {
  return (
    <div className="grid-container">
      {data.map((pokemon) => (
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
  );
};
