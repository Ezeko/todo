import React from 'react'


const InputField = props =>{
    return(
        <React.Fragment>
            <input type="text" onChange={props.ChangeField} 
            value={props.newTodo}
            placeholder="Add task here"/>
            <input type="submit" value="Add task"  onClick={props.SubmitTodo}/>
        </React.Fragment>
    )
}

export default InputField