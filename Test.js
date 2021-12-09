const createStore=require("redux").createStore

// const reducer=(state = [], action)=> {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state,action.text]
//     default:
//       return state
//   }
// }
// const addTodo=text=>({
//     type: 'ADD_TODO',
//     text
// })
// const store = createStore(reducer)
// console.log(store);
// // [ 'Use Redux', 'Read the docs' ]


// store.dispatch(addTodo("Add To do"));
// store.dispatch(addTodo("Add to List"))

// console.log(store.getState());

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

    const countUp={
        type:"Increment"
        }
    const countDown={
        type:"Decrement",
        }
        const store = createStore(reducer)
    const unsubscribe=store.subscribe(()=>{
        console.log(store.getState());
    })
        store.dispatch(countUp);
        store.dispatch(countDown);
        store.dispatch(countUp);
        store.dispatch(countUp);

        unsubscribe();
        store.dispatch(countDown);