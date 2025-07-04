import DataTable from 'react-data-table-component';
import type { PokemonDetails } from '../../types/PokemonsDetails';
import { useMemo, useState } from 'react';
import { getPokemonColumns } from './ColumnsPokemon';
import './TablePokemon.css';

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
  const columns = getPokemonColumns(onSelect, getStats);

  return (
    <div className="table">
      <DataTable
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};
