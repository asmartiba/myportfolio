import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import ColorPicker from './components/ColorPicker';
import SlotMachine from './components/SlotMachine';
import PokemonDisplay from './components/PokemonDisplay';
import Counter from './components/Counter';
import Pokedex from './components/PokemonAPI';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/components">
            <Route index element={<Portfolio/>}/>
            <Route  path="color-picker" element={<ColorPicker/>}/>
            <Route  path="slot-machine" element={<SlotMachine slots={3}/>}/>
            <Route  path="evolve-eevee" element={<PokemonDisplay/>}/>
            <Route  path="pokedex" element={<Pokedex/>}/>
            <Route  path="counter" element={<Counter/>}/>
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer copy="Asmar Tiba" year={2022}/>
      </Router>
    </div>
  );
}

export default App;

// <Route path="/components" element={<Portfolio/>}/>
// <Route  path="/components/:id" element={<PortfolioItem/>}/>