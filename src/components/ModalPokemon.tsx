import type { PokemonDetails } from '../types/PokemonsDetails';

interface Props {
  selectedPokemon: PokemonDetails | null;
  setSelectedPokemon: (pokemon: PokemonDetails | null) => void;
}

export const ModalPokemon = ({
  selectedPokemon,
  setSelectedPokemon,
}: Props) => {
  return (
    <div>
      {selectedPokemon && (
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <h3>{selectedPokemon.name.toUpperCase()}</h3>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <p>Altura: {selectedPokemon.height / 10} m</p>
          <p>Peso: {selectedPokemon.weight / 10} kg</p>
          <p>
            Tipos: {selectedPokemon.types.map((t) => t.type.name).join(', ')}
          </p>
          <p>Estadísticas:</p>
          <ul>
            {selectedPokemon.stats.map((s) => (
              <li key={s.stat.name}>
                {s.stat.name}: {s.base_stat}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedPokemon(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};
