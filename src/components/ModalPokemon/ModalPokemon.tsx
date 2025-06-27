import type { PokemonDetails } from '../../types/PokemonsDetails';
import { getStatStyle } from '../TablePokemons/ColumnsPokemon';
import './ModalPokemon.css';

interface Props {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: (pokemon: PokemonDetails | null) => void;
}

export const ModalPokemon = ({
  selectedPokemon,
  setSelectedPokemon,
}: Props) => {
  //---Traducción de las estadísticas---
  const translations: Record<string, string> = {
    hp: 'Salud',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defensa Especial',
    speed: 'Velocidad',
  };

  if (!selectedPokemon) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedPokemon(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={() => setSelectedPokemon(null)}
        >
          &times;
        </button>
        <h2>{selectedPokemon.name.toUpperCase()}</h2>
        <img
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
          className="modal-image"
        />
        <p>Altura: {selectedPokemon.height / 10} m</p>
        <p>Peso: {selectedPokemon.weight / 10} kg</p>
        <p>
          Tipo(s): {selectedPokemon.types.map((t) => t.type.name).join(', ')}
        </p>
        <p>Estadísticas:</p>
        <ul>
          {selectedPokemon.stats.map((s) => (
            <li key={s.stat.name}>
              {translations[s.stat.name] ?? s.stat.name}:{' '}
              <span style={getStatStyle(s.base_stat)}>{s.base_stat} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
