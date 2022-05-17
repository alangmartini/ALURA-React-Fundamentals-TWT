import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isPropertySignature } from 'typescript';
import Calculator from '../components/Calculator'
function App() {

      
    return (
      <div className="App">
      <Calculator  />
      <div className="myShow">
        <p>
          Oi
        </p>
      </div>

      </div>
    );
  }


export default App;
