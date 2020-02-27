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
                        <div id='box'>
                        <h1 key={i} id={opt.status} >
                            {opt.task}
                        </h1>
                        <i key={i + 'p'} className="fa fa-check-square"></i>
                        
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