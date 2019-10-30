import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <header>
        <form id="to-do-list">
          <input type='text' placeholder='Enter the text'/>
          <button type='submit'> Add</button>
        </form>
      </header>
      </div>
    )
  }
}

export default App;
