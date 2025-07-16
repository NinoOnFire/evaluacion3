
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Contactenos from './Components/Contactenos';
import Comentarios from './Components/Comentarios';

import PokemonTypes from './Components/PokemonTypes';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/Contactenos" element={<Contactenos />}/>
      <Route path="/Comentarios" element={<Comentarios />}/>
      <Route path='/PokemonTypes' element={<PokemonTypes/>}/>
    </Routes>
    </>
  );
}


export default App
