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
                  
                  };
    
    
  }
  //save todos as you type
   handleChange = (event) =>{
    this.setState({newTodo:  event.target.value })
   
   }


   handleSubmit = (event) =>{
     let todo = this.state.todos.concat({task: this.state.newTodo})
     this.setState({todos: todo, newTodo: ''})
     event.preventDefault()

  }
  
  render(){
   
    return(
    <div className="App">

      <InputField ChangeField={this.handleChange}
      newTodo = {this.state.newTodo}
      SubmitTodo={this.handleSubmit} />

      <Todos todos= {this.state.todos} />

    </div>
    )
  }
}

export default App;
