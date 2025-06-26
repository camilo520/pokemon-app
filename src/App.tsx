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
    <div className="background">
      <h2>Lista de los primeros 151 Pokémones</h2>
      <div style={{ paddingBottom: 20 }}>
        <button onClick={switchComponent}>
          {changeComponent
            ? 'Cambiar vista a cuadricula'
            : 'Cambiar vista a tabla'}
        </button>
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
