import postData from "./postData"
const postTodo=(state)=>{
let newTask={
    user: "geethuSuresh",
    todos: state.map(value=>({text:value,status:true}))
}   
postData("http://192.168.1.42:8086/todos",newTask)
.then(data=>console.log(data)) 
}

export default postTodo