import { Header } from './Header';
import { Login } from './Login';
import { Inicio } from './Inicio';
import connection from './solana-config';
import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Login/>
    </React.Fragment>
  );
}

export default App;