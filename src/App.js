import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Layout from './components/Layout';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
