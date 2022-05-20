import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import axios from 'axios';
import { getUsers } from './redux/usersSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((data:any)=>
    dispatch(getUsers(data.data))
    )

}, [])
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
          path="/:id"
          element={
            <div className="template_pages">
              <Header />
              <UserPage />
            </div>
          }
        />
         <Route
          path="/posts"
          element={
            <div className="template_pages">
              <Header />
            </div>
          }
        />

          <Route
          path="/posts/:id"
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
