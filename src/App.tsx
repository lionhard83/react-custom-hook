import React, { useState, createContext, useReducer } from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Languages, allLanguages } from './languages';
import { Cards } from './components/Cards/Cards';
import { Card } from './components/Card/Card';


export const LangContext = createContext<Languages>("it");


const reducer = (state: number, {type}: {type: 'next' | 'reset'}) => {
    switch (type) {
      case "next": return state + 1 >= allLanguages.length ? 0 : state + 1; 
      case "reset": return 0;
    }
}


function App() {

  const [state, dispatch] = useReducer(reducer, 0);
  
  
  const changeLang = () => {
    dispatch({type: 'next'})
  }

  return (
    <div className="App">
        {/* {
          allLanguages.map(l => <><button onClick={() => changeLang(l)} >{l}</button><br /></>)
        } */}
        <button onClick={changeLang}>{allLanguages[state]}</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <LangContext.Provider value={allLanguages[state]}>
          <Content />
          <Cards />
          <Card />
        </LangContext.Provider>
    </div>
  );
}

export default App;
