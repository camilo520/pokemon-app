import { useMemo, useState } from 'react';
import './App.css';
import { usePokemonData } from './hooks/useDataPokemon';
import { TableComponent } from './components/TablePokemons/TableComponent';
import { GridComponent } from './components/GridComponent/GridComponent';
import { ModalPokemon } from './components/ModalPokemon/ModalPokemon';
import { LoadingComponent } from './components/LoadingComponent';

function App() {
  //---Hook para obtener los datos de los Pokémones---
  const { data, loading, selectedPokemon, setSelectedPokemon, getStats } =
    usePokemonData();

  const [changeComponent, setChangeComponent] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [searchName, setSearchName] = useState<string>('');

  //---Función para cambiar entre la vista de tabla y la vista de cuadricula---
  const switchComponent = () => {
    if (changeComponent) {
      setChangeComponent((changeComponent) => !changeComponent);
    } else {
      setChangeComponent((changeComponent) => !changeComponent);
    }
  };

  //---Generar lista de tipos de Pokémon-----
  const types = useMemo(() => {
    const allTypes = data.flatMap((pokemon) =>
      pokemon.types.map((p) => p.type.name),
    );
    return ['Todos', ...Array.from(new Set(allTypes))];
  }, [data]);

  //---Filtra los Pokemones por tipo y nombre-----
  const filteredData = useMemo(() => {
    return data.filter((pokemon) => {
      const matchesType =
        selectedType === 'Todos' ||
        pokemon.types.some((p) => p.type.name === selectedType);

      const matchesName = pokemon.name
        .toLowerCase()
        .includes(searchName.toLowerCase());

      return matchesType && matchesName;
    });
  }, [data, selectedType, searchName]);

  if (loading) return <LoadingComponent />;

  return (
    <div className="background">
      <h1>Lista de los primeros 151 Pokémones</h1>
      <div className="switch-container">
        <span style={{ fontSize: '1.2rem' }}>
          {changeComponent ? 'Vista de tabla' : 'Vista de cuadricula'}
        </span>
        <label className="switch">
          <input
            type="checkbox"
            checked={changeComponent}
            onChange={switchComponent}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div style={{ marginBottom: '1rem', paddingTop: '1rem' }}>
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
        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            placeholder="Busqueda por nombre"
            className="search-input"
          />
        </div>
      </div>
      {changeComponent ? (
        <TableComponent
          data={filteredData}
          loading={loading}
          getStats={getStats}
          onSelect={setSelectedPokemon}
        />
      ) : (
        <GridComponent data={filteredData} onSelect={setSelectedPokemon} />
      )}

      <ModalPokemon
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
}
export default App;
