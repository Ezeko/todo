import React from 'react'
import './css/InputField.css'


const InputField = props =>{
    return(
        <React.Fragment>
            <form onSubmit={props.SubmitTodo}>
                <input type="text" onChange={props.ChangeField} 
                value={props.newTodo}
                placeholder=" Add task here"/>
                <input type="submit" value="Add task"  onClick={props.SubmitTodo}/>
            </form>
           
        </React.Fragment>
    )
}

export default InputField