import React from 'react';
import  ReactDOM  from 'react-dom';
import TodosLogic from './components/TodosLogic';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
    <Navbar />
    <Header />
    <TodosLogic /> 
  </div>,
  rootElement
);