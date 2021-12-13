import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import "./Todo.css"

const Todo = () => {
    const todoList= useSelector(state => state)
    const dispatch=useDispatch();
    const [input,setInput]=useState();

    return (
        <div className="c-container">
            <div className="sub--container">
                <input type="text" className="input-section" 
                onChange={(e)=>{
                    setInput(e.target.value)
                }}
                value={input}/>
            <button className="add-todo"
                onClick={
                   ()=> {
                        dispatch({
                            type:"ADD_TODO",
                            value:input
                        })
                        setInput("")
                    }

                }
            >ADD</button>
            </div>
            <div className="result-section">
                {todoList.map((value,i)=>
                    <div className="sub-result" key={i}>{value}<button className="delete-button"
                        onClick={
                            ()=>{
                                dispatch({
                                    type:"Delete",
                                    index:i
                                })
                            }
                        }
                    >DELETE</button>
                </div>
                )}
            </div>
            
        </div>
    )
}

export default Todo
