import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="template_pages">
              <Header />
              <HomePage />
            </div>
          }
        />
        <Route
          path="/users"
          element={
            <div className="template_pages">
              <Header />
            </div>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
