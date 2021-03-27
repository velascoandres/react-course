import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PrimeraAPP } from './PrimeraApp';

// ReactDOM.render(
//  <React.StrictMode>
//    <CounterApp value={10} />
//  </React.StrictMode>,
//  document.getElementById('root')
//);


ReactDOM.render(
  <React.StrictMode>
    <PrimeraAPP saludo="Hola soy goku" subtitulo="mensaje..." />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
