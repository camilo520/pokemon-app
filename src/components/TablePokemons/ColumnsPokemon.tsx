import type { TableColumn } from 'react-data-table-component';
import type { PokemonDetails } from '../../types/PokemonsDetails';

//---Define los estilos de las estadísticas dependiendo de su valor---
export const getStatStyle = (value: number) => {
  if (value >= 100)
    return {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '4px 8px',
      borderRadius: '6px',
    };
  if (value <= 50)
    return {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      padding: '4px 8px',
      borderRadius: '6px',
    };
  return {
    backgroundColor: '#fff3cd',
    color: '#856404',
    padding: '4px 8px',
    borderRadius: '6px',
  };
};

//---Genera las columnas de la tabla---
export const getPokemonColumns = (
  onSelect: (pokemon: PokemonDetails) => void,
  getStats: (pokemon: PokemonDetails, statName: string) => number,
): TableColumn<PokemonDetails>[] => [
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
    name: (
      <span>
        Ataque
        <br />
        base
      </span>
    ),
    cell: (row) => {
      const value = getStats(row, 'attack');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'attack');
      const valueB = getStats(rowB, 'attack');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: (
      <span>
        Experiencia
        <br />
        base
      </span>
    ),
    selector: (row) => row.base_experience,
    sortable: true,
  },
  {
    name: (
      <span>
        Ataque
        <br />
        base
      </span>
    ),
    cell: (row) => {
      const value = getStats(row, 'attack');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'attack');
      const valueB = getStats(rowB, 'attack');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: (
      <span>
        Defensa
        <br />
        base
      </span>
    ),
    cell: (row) => {
      const value = getStats(row, 'defense');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'defense');
      const valueB = getStats(rowB, 'defense');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: (
      <span>
        Ataque
        <br />
        especial
      </span>
    ),
    cell: (row) => {
      const value = getStats(row, 'special-attack');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'special-attack');
      const valueB = getStats(rowB, 'special-attack');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: (
      <span>
        Defensa
        <br />
        especial
      </span>
    ),
    cell: (row) => {
      const value = getStats(row, 'special-defense');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'special-defense');
      const valueB = getStats(rowB, 'special-defense');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: 'Velocidad',
    cell: (row) => {
      const value = getStats(row, 'speed');
      return <span style={getStatStyle(value)}>{value}</span>;
    },
    sortFunction: (rowA, rowB) => {
      const valueA = getStats(rowA, 'speed');
      const valueB = getStats(rowB, 'speed');
      return valueA - valueB;
    },
    sortable: true,
  },
  {
    name: 'Ver detalles',
    cell: (row) => <button onClick={() => onSelect(row)}>Ver</button>,
    ignoreRowClick: true,
    button: true,
  },
];
