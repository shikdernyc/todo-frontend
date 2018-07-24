import React, { Component } from 'react';
import './App.css';

const ToDoItem = ({todo}) =>{
  return(<li key={todo._id}>{todo.name}</li>)
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      newToDo: ''
    }
  }
  
  componentWillMount(){
    this.reupdateState()
  }
  
  reupdateState(){
    fetch('https://reactodopractice.herokuapp.com/api/todos')
    .then(data => data.json())
    .then(todos =>{
      this.setState({
        ...this.sate,
        todos: todos
      })
    })
  }
  
  handleNewToDo = e => {
    if(e.key === 'enter'){
      // TODO: Create a new ToDo and send it
    }
  }
  
  createNewToDo(name){
    var url = 'https://example.com/profile';
    var data = {username: 'example'};
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  render() {
    let todo = this.state.todos.map((todo, index)=>{
      return <ToDoItem todo={todo}/>
    })
    
    return (
      <div>
        <h1>React To Do App</h1>
        <input 
          type='text' 
          name="newToDo" 
          value={this.state.newToDo} 
          onChange={(e)=>
            this.setState({...this.state, [e.target.name]: e.target.value})
          }
          onKeyPress={this.handleNewToDo}
        />
        <ul>
          {todo}
        </ul>
      </div>
    );
  }
}

export default App;
