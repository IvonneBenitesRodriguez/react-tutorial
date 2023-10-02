import React from 'react';
import reactLogo from './images/reactlogo.svg';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
 <div>
    <h1>Hello from React application</h1>
    <img src={reactLogo} className='logo react' alt='React logo' />
  </div> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
