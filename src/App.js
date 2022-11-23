import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Generator from './components/Generator';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/generator' element={<Generator />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
