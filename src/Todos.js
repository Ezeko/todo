import React from 'react'
import './css/Todos.css'

const Todos = props =>{
    return(
        <React.Fragment >
            <div id="todos">
            {
                props.todos.map((opt, i)=>{
                return (
                    
                        <h1 key={i} id={opt.status} >
                        {opt.task}
                    </h1>
                  
                    
               
                )
                }
            
            )}
              </div>
        </React.Fragment>
           
    )
}

export default Todos