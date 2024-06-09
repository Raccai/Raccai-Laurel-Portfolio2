import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Landing } from "./Landing/Landing"
import { Project } from "./Project/Project"

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Project/:id' element={<Project />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
