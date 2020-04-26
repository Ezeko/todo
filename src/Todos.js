import React from 'react'
import './css/Todos.css'

const Todos = props =>{
    return(
        <React.Fragment >
            <div id="todos">
            {
                props.todos.map((opt, i)=>{
                if (opt){
                    return (
                        <div id='box' key = {i}>
                        <h1  id={opt.status} >
                            {opt.task}
                        </h1>
                        <div id='fa-fa'>
                        <i  className="fa fa-check-square" onClick = { () => props.isDone(opt.id) }></i>
                        <i  className="fa fa-trash" onClick = { () => props.delete(i) }></i>
                        </div>
                        </div>
                    )
                }else{
                    return null
                }
                
                }
            
            )}
              </div>
        </React.Fragment>
           
    )
}

export default Todos