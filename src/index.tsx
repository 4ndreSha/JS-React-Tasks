import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Task1Page from './pages/task1';
import Task2Page from './pages/task2';
import Task3Page from './pages/task3';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task1' element={<Task1Page />} />
        <Route path='/task2' element={<Task2Page />} />
        <Route path='/task3' element={<Task3Page />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);