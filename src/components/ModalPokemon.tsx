import type { PokemonDetails } from '../types/PokemonsDetails';

interface Props {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: (pokemon: PokemonDetails | null) => void;
}

export const ModalPokemon = ({
  selectedPokemon,
  setSelectedPokemon,
}: Props) => {
  if (!selectedPokemon) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedPokemon(null)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer click dentro
      >
        <button
          className="modal-close"
          onClick={() => setSelectedPokemon(null)}
        >
          &times;
        </button>
        <h3>{selectedPokemon.name.toUpperCase()}</h3>
        <img
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
          className="modal-image"
        />
        <p>Altura: {selectedPokemon.height / 10} m</p>
        <p>Peso: {selectedPokemon.weight / 10} kg</p>
        <p>Tipos: {selectedPokemon.types.map((t) => t.type.name).join(', ')}</p>
        <p>Estadísticas:</p>
        <ul>
          {selectedPokemon.stats.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
