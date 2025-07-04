import type { PokemonDetails } from '../../types/PokemonsDetails';
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
          {selectedPokemon.stats.map((s) => {
            const value = Math.min(s.base_stat, 100);
            let barColor = '#f44336';
            if (value >= 70) barColor = '#4caf50';
            else if (value >= 40) barColor = '#ff9800';

            return (
              <li key={s.stat.name} style={{ marginBottom: '0.7rem' }}>
                {translations[s.stat.name] ?? s.stat.name}:{' '}
                <span
                  style={{ marginLeft: 8, fontSize: '0.95em', color: '#555' }}
                >
                  {s.base_stat}
                </span>
                <div
                  style={{
                    background: '#eee',
                    borderRadius: '8px',
                    height: '18px',
                    width: '120px',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${value}%`,
                      height: '100%',
                      background: barColor,
                      transition: 'width 0.4s',
                    }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
