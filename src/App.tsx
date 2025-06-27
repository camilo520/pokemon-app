import { useState } from 'react';
import './App.css';
import { usePokemonData } from './hooks/useDataPokemon';
import { TableComponent } from './components/TablePokemons/TableComponent';
import { GridComponent } from './components/GridComponent/GridComponent';
import { ModalPokemon } from './components/ModalPokemon/ModalPokemon';

function App() {
  const { data, loading, selectedPokemon, setSelectedPokemon, getStats } =
    usePokemonData();

  const [changeComponent, setChangeComponent] = useState(true);

  const switchComponent = () => {
    if (changeComponent) {
      setChangeComponent((changeComponent) => !changeComponent);
    } else {
      setChangeComponent((changeComponent) => !changeComponent);
    }
  };

  if (loading) return <p>Cargando Pokemones...</p>;

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
      {changeComponent ? (
        <TableComponent
          data={data}
          loading={loading}
          getStats={getStats}
          onSelect={setSelectedPokemon}
        />
      ) : (
        <GridComponent data={data} onSelect={setSelectedPokemon} />
      )}

      <ModalPokemon
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
}
export default App;
