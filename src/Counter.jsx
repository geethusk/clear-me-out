import React from 'react'
import { useState } from 'react';

const Counter = ({store}) => {
    const [input,setInput]=useState("");

    const addTodo=(value)=>{
        store.dispatch({
            type:"ADD_TODO",
            value
        })
    }

    const deleteTodo=(index)=>{
        store.dispatch({
            type:"DELETE_TODO",
            index
        })
    }
    const sortTodo=(value)=>{
        store.dispatch({
            type:"SORT_TODO",
            value
        })
        }  
    return (
        <div className="c-container">
            <div className="input-section">
            <input type="text"
                onChange={
                    (e)=>{
                        setInput(e.target.value)
                        
                }}
            />
            <button className="sub-button"
            onClick={
                ()=>{
                    addTodo(input)
                    setInput("");
            }}
            >Add</button>
            <div>
                <button className="sub-button"
                    onClick={
                        ()=>{
                            sortTodo(input)
                        }
                    }>Sort</button></div>
                 </div>
            <div className="todo-list">
                {
                    store.getState().map((value,i)=><div className="close-button" key={i}>
                    {value}
                <button
                    onClick={
                        ()=>{
                            deleteTodo(i)
                        }
                    }>close</button>
                    </div>)
                }
                
          </div>

            
    </div>
    )
}

export default Counter
