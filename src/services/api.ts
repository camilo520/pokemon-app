import type { PokemonList } from '../types/PokemonTypes';

export async function GetPokemon(
  limit = 151,
  offset = 0,
): Promise<PokemonList> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error('Error al obtener la lista de Pokémon');
  }

  return await response.json();
}
