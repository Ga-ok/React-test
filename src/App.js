import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper.js';

function App() {

  const name='react';
  const style={
    backgroundColor:'black',
    color: 'aqua',
    fontSize: 24, 
    padding: '1rem'
  }

  return (
    <Wrapper>
      <Hello name="Gaok" isSpecial={true}/>
      <Hello color="pink"/>
      <Hello name="Gaok" color="red" isSpecial={true}/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;
