import { useEffect, useState } from 'react';
import './App.css';
import DataTable, { type TableColumn } from 'react-data-table-component';
import { GetAllDetailsPokemon, GetPokemon } from './services/api';
import type { PokemonDetails } from './types/PokemonsDetails';
import { usePokemonData } from './hooks/useDataPokemon';
import { TableComponent } from './components/TableComponent';

function App() {
  const { data, loading, selectedPokemon, setSelectedPokemon, getStats } =
    usePokemonData();

  return (
    <div style={{ padding: 20 }}>
      <h2>Pokémon (151 primeros)</h2>
      <TableComponent
        data={data}
        loading={loading}
        getStats={getStats}
        onSelect={setSelectedPokemon}
      />

      <div className="grid-container">
        {data.map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemon-card"
            onClick={() => setSelectedPokemon(pokemon)}
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

      {selectedPokemon && (
        <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 20 }}>
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
}
export default App;
