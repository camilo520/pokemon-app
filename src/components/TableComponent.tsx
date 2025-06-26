import DataTable, { type TableColumn } from 'react-data-table-component';
import type { PokemonDetails } from '../types/PokemonsDetails';
import { useMemo, useState } from 'react';

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

  const columns: TableColumn<PokemonDetails>[] = [
    {
      name: 'Imagen',
      cell: (row) => (
        <img
          src={row.sprites.front_default}
          alt={row.name}
          width={50}
          onClick={() => onSelect(row)}
        />
      ),
      sortable: false,
    },
    {
      name: 'Nombre',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Tipo(s)',
      selector: (row) => row.types.map((t) => t.type.name).join(', '),
      sortable: true,
    },
    {
      name: 'Peso (kg)',
      selector: (row) => row.weight / 10,
      sortable: true,
    },
    {
      name: 'Altura (m)',
      selector: (row) => row.height / 10,
      sortable: true,
    },
    {
      name: 'Salud base',
      selector: (row) => getStats(row, 'hp'),
      sortable: true,
    },
    {
      name: 'Experiencia base',
      selector: (row) => row.base_experience,
      sortable: true,
    },
    {
      name: 'Ataque base',
      selector: (row) => getStats(row, 'attack'),
      sortable: true,
    },
    {
      name: 'Defensa base',
      selector: (row) => getStats(row, 'defense'),
      sortable: true,
    },
    {
      name: 'Ataque especial',
      selector: (row) => getStats(row, 'special-attack'),
      sortable: true,
    },
    {
      name: 'Defensa especial',
      selector: (row) => getStats(row, 'special-defense'),
      sortable: true,
    },
    {
      name: 'Velocidad',
      selector: (row) => getStats(row, 'speed'),
      sortable: true,
    },
    {
      name: 'Ver detalles',
      cell: (row) => <button onClick={() => onSelect(row)}>Ver</button>,
      ignoreRowClick: true,
      button: true,
    },
  ];

  return (
    <div>
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
