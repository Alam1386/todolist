import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
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
   // Adding the delete item function
   deleteItem(key){
     const filterItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filterItems
      })
   }
   // Creating the Updae function so that enables us to edit the list.
   setUpdate(text, key){
     const items = this.state.items;
     items.map(item =>{
       if(item.key === key){
         item.text = text;
       }
     })
     this.setState({
       items: items
     })
   }
  render(){
    return(
      <div className='App'>
          <Paper>
          <header>
          <form id="to-do-list"onSubmit={this.addItem}>
              <h1>Daily to do App</h1>
            <input type='text' placeholder='Type the task!'
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type='submit'> Add to the list</button>
          </form>
        </header>
          <ListItems items = {this.state.items}
          deleteItem = {this.deleteItem}
          setUpdate = {this.setUpdate}
          />
        </Paper>
        <p>Developed by: <a href="https://alamtalash.com" target="_blank">Alam Talash</a></p>
        </div>
    )
  }
}

export default App;
