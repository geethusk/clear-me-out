import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createStore } from 'redux'

const reducer=(state = 0, action)=> {
  switch (action.type) {
    case "Increment":
      return state+1
    case "Decrement":
        return state-1
    default:
      return state
  }
}

const store=createStore(reducer)

const render=()=>{

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
store.subscribe(render);
render()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-v
