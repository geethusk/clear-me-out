import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useState} from 'react'
import { useEffect } from 'react'
import "./Todo.css"
// import postData from   "./Services/postData"

const Todo = () => {
    const todoList= useSelector(state => state.todos)
    const dispatch=useDispatch();
    const [input,setInput]=useState();
useEffect(() => {
    // let newTask={
    //         user: "geethuSuresh",
    //         todos: [
    //           {
    //             text: "This is a task 1",
    //             status: true
    //           },
    //       {
    //             text: "This is a task 2",
    //             status: false
    //           }
    //         ]
    //     }
    //     postData("http://192.168.1.42:8086/todos",newTask)
    //     .then(data=>console.log(data))
        fetch("http://192.168.1.42:8086/todos/geethuSuresh")
        .then(response=>response.json())
        .then((data)=>dispatch({
            type:"CREATE",
            value:data[0].todos.map(value=>value.text)
        }))
}, [])

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
