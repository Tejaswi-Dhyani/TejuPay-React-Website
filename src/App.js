// import './App.css';
import React from 'react';
import {Route,Routes} from "react-router-dom";

import {Home} from './pages/Home';
import { Notfound } from './pages/Notfound';
import { Service } from './pages/Service';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';


function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/service' element={<Service/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contacts' element={<Contacts/>}></Route>
      <Route  path='*' element={<Notfound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
