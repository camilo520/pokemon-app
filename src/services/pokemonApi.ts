import type { PokemonDetails } from '../types/PokemonsDetails';
import type { PokemonList } from '../types/PokemonTypes';

export async function GetPokemon(limit = 151): Promise<PokemonList> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error('Error al obtener la lista de Pokémon');
  }

  return await response.json();
}

export async function GetAllDetailsPokemon(
  url: string,
): Promise<PokemonDetails> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error con ${url}`);
  return await res.json();
}
