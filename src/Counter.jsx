import React from 'react'

const Counter = ({store}) => {
    return (
        <div className="main-container">
            <button className="plus-button"
                onClick={
                    ()=>{
                        console.log(store.getState());
                        store.dispatch({
                            type:"Increment"
                        })
                }}
            >+</button>
            <div className="result-field">
                {store.getState()}
            </div>
            <button className="sub-button"
            onClick={
                ()=>{
                    console.log(store.getState());
                    store.dispatch({
                        type:"Decrement"
                    })
            }}
            >-</button>

            
        </div>
    )
}

export default Counter
