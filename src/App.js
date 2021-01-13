import './App.css';
import { FILTER_LIST } from './components/filter';
import { Pokemon } from './components/list-pokemon';
import { pokemon } from './pokemondata';

function App() {
  return (
    <div className="App">
      <Pokemon data={pokemon} />
      <div className="container-filter">
        <FILTER_LIST color="red" type="Fire" />
        <FILTER_LIST color="blue" type="Water" />
        <FILTER_LIST color="green" type="Grass" />
      </div>
    </div>
  );
}

export default App;
