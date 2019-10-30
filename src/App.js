import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  // handle function
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  // Add Item function 
   addItem(e){
     e.preventDefault(); // this function will prevent default behavior of button which you click on it and it will referesh the page.
    const newItem = this.state.currentItem;
    // console.log(" The values is: ", newItem);
    if(newItem.text !==""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
   }
  render(){
    return(
      <div className='App'>
        <header>
        <form id="to-do-list"onSubmit={this.addItem}>
          <input type='text' placeholder='Enter the text'
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type='submit'> Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items}/>
      </div>
    )
  }
}

export default App;
