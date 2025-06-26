import { useState } from 'react';
import './App.css';
import { usePokemonData } from './hooks/useDataPokemon';
import { TableComponent } from './components/TableComponent';
import { GridComponent } from './components/GridComponent';
import { ModalPokemon } from './components/ModalPokemon';

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
    <div style={{ padding: 20 }}>
      <h2>Pokémon (151 primeros)</h2>
      <button onClick={switchComponent}>
        {changeComponent ? 'Cambiar a cuadricula' : 'Cambiar a tabla'}
      </button>
      {changeComponent ? (
        <TableComponent
          data={data}
          loading={loading}
          getStats={getStats}
          onSelect={setSelectedPokemon}
        />
      ) : (
        <GridComponent
          data={data}
          loading={loading}
          onSelect={setSelectedPokemon}
        />
      )}

      <ModalPokemon
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
}
export default App;
