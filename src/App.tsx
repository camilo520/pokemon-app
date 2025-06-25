import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import type { PokemonData } from './types/PokemonTypes';
import { GetPokemon } from './services/api';

function App() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    GetPokemon()
      .then((res) => setPokemon(res.results))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando Pokemones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Primeros 151 Pokémon</h1>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
