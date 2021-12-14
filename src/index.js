import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import postTodo from './Services/postTodo';

const reducer=(state=
  {
    todos:[],
    counter:0,
    isLoggedIn:true,
  },
   action)=> {
  let updatedList;
  switch (action.type) { 
    case "CREATE":
      return {
        ...state,
        todos:action.value
      }
    case "ADD_TODO": 
     updatedList=[...state.todos,action.value]
      postTodo(updatedList)
      return {
        ...state,
        todos:updatedList
      }
    case "Delete":
      updatedList= state.todos.filter((_value,i)=>i!==action.index)
      postTodo(updatedList)
        return {
          ...state,
          todos:updatedList
        }
    case "Increment":
      return{
        ...state,
        counter:state.counter+1
      }
    case "Decrement":
      return{
        ...state,
        counter:state.counter-1
      }
    case "LogOut":
      return{
        ...state,
        isLoggedIn:false
      }
    case "LoggedIn":
      return{
        ...state,
        isLoggedIn:true
      }
    default:
      return state
  }
}

const store=createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>    {/* to access store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-v
