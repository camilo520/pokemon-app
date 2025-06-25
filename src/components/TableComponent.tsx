import DataTable, { type TableColumn } from 'react-data-table-component';
import type { PokemonDetails } from '../types/PokemonsDetails';

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
  const columns: TableColumn<PokemonDetails>[] = [
    {
      name: 'Imagen',
      cell: (row) => (
        <img src={row.sprites.front_default} alt={row.name} width={50} />
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
      selector: (row) => row.weight,
      sortable: true,
    },
    {
      name: 'Altura (m)',
      selector: (row) => row.height,
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
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      highlightOnHover
      responsive
    />
  );
};
