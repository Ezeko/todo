import React from 'react'

const Todos = props =>{
    return(
        <React.Fragment>
            {props.todos.map((opt, i)=>{
            return <h1 id={i}>{opt.task}</h1>
            })}
        </React.Fragment>
    )
}

export default Todos