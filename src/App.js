import React ,{ Component}from 'react';
import Todos from './Todos'
import InputField from './InputField'

import './App.css';

class App extends Component {
  constructor(){
    super()
    // declare the states. the state are the dynamic variables of an app
    // the state of the app is empty at the start of the app
    this.state = {todos: [],
                    newTodo: '',
                  id: 0
                  };
    
    
  }
  //save todos as you type
   handleChange = (event) =>{
    this.setState({newTodo:  event.target.value })
   
   }


   handleSubmit = (event) =>{
     const id =  this.state.id + 1;
     let todo = this.state.todos.concat({task: this.state.newTodo, id})
     this.setState({todos: todo, newTodo: '', id})
     event.preventDefault()

  }
  changeStatus = () =>{
    let todo = this.state.todos.concat({task: this.state.newTodo, status: 'Cleared'})
    this.setState({todos: todo})
  }
  
  render(){
   
    return(
    <div className="App">

      <InputField ChangeField={this.handleChange}
      newTodo = {this.state.newTodo}
      SubmitTodo={this.handleSubmit} />

      <Todos className="todo" todos= {this.state.todos} 
      changeId ={this.changeStatus}
      />

    </div>
    )
  }
}

export default App;
