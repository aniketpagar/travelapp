import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';

import { MovieProvider } from './contexts/MovieContext';

function App() {
  console.log("App Component Loaded!");
  const [count, setCount] = useState(0)

  return (
   
    <MovieProvider>
      <NavBar /> 
      <main className="main-content">
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Favourite" element={<Favourite/>}/>
           <Route path="/About" element={<About/>}/>
      </Routes>
      </main>
      
    </MovieProvider>
  );
}


function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
