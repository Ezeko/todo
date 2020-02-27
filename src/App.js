import React ,{ Component}from 'react';
import Todos from './Todos'
import InputField from './InputField'

import './App.css';

class App extends Component {
  constructor(){
    super()
    // declare the states. the state are the dynamic variables of an app
    // the state of the app is empty at the start of the app
    this.state = {todos: [ {task: "eat"}, {task: "sleep"}]};
    
  }
  
  render(){
   
    return(
    <div className="App">
      <InputField />
      <Todos todos= {this.state.todos}/>
    </div>
    )
  }
}

export default App;
