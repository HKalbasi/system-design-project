import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Users } from "./users/Users";
import { Login } from './users/Login';
import { Error404 } from './errors/Error404';
import { Home } from './home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='users' >
            <Route path='login' element={<Login />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
