import DataTable, { type TableColumn } from 'react-data-table-component';
import type { PokemonDetails } from '../types/PokemonsDetails';
import { useMemo, useState } from 'react';
import { getPokemonColumns } from './ColumnsPokemon';

interface Props {
  data: PokemonDetails[];
  loading: boolean;
  onSelect: (pokemon: PokemonDetails) => void;
  getStats: (pokemon: PokemonDetails, statName: string) => number;
}

export const TableComponent = ({
  data,
  loading,
  onSelect,
  getStats,
}: Props) => {
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const columns = getPokemonColumns(onSelect, getStats);

  const types = useMemo(() => {
    const allTypes = data.flatMap((pokemon) =>
      pokemon.types.map((t) => t.type.name),
    );
    return ['Todos', ...Array.from(new Set(allTypes))];
  }, [data]);

  const filteredData = useMemo(() => {
    if (selectedType === 'Todos') return data;
    return data.filter((pokemon) =>
      pokemon.types.some((t) => t.type.name === selectedType),
    );
  }, [data, selectedType]);

  return (
    <div className="table">
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="typeFilter">Filtrar por tipo:&nbsp;</label>
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        progressPending={loading}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};
