// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Emergency from './Components/Emergency/Emergency';
import Weather from './Components/Forecast/Forecast';
import Disaster from './Components/Disasters/Disaster';
import { useEffect } from 'react';

function App() {

  
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/emergency' element={<Emergency />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/disaster' element={<Disaster />} />
    </Routes>
  );
}

export default App;
