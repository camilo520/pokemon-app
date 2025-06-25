export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}
