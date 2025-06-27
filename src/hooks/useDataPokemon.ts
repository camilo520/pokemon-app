import { useEffect, useState } from 'react';
import { GetAllDetailsPokemon, GetPokemon } from '../services/pokemonApi';
import type { PokemonDetails } from '../types/PokemonsDetails';

export const usePokemonData = () => {
  const [data, setData] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null,
  );

  //---Carga los primeros 151 Pokémones al iniciar el hook---
  useEffect(() => {
    const cargarPokemones = async () => {
      try {
        const list = await GetPokemon(151);
        const details = await Promise.all(
          list.results.map((pokemon) => GetAllDetailsPokemon(pokemon.url)),
        );
        setData(details);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    cargarPokemones();
  }, []);

  //---Función para obtener las estadísticas específicas de un Pokémon---
  const getStats = (pokemon: PokemonDetails, statName: string) => {
    return pokemon.stats.find((s) => s.stat.name === statName)?.base_stat ?? 0;
  };

  return {
    data,
    loading,
    selectedPokemon,
    setSelectedPokemon,
    getStats,
  };
};
