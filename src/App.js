import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListConteiner greeting="Hola, bienvenido!"/>
      <ItemCount/>
      </header>
    </div>
  );
}

export default App;
