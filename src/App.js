
import './App.css';
import router from "react-router-dom"
//Home Page>category List>Question Page
//sign Up Page
//Login
//Ask Question
//Answer 
//feed back 
import {BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Routes/Home';
import Category from './Routes/Category';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';
import AskQuestions from './Routes/AskQuestions';
import Question from './Routes/Question';
import Answer from './Routes/Answer';
import Feedback from './Routes/Feedback';

function App() {
  return (
    <div className="App">
      <header>
        <h1>header</h1>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="category" element={<Category/>}/>
            <Route path="login" element={<Login/>}/>
             <Route path="sign-up" element={<SignUp/>}/>
             <Route path="ask-questions" element={<AskQuestions/>}/>
             <Route path="question" element={<Question/>}/>
             <Route path="answer" element={<Answer/>}/>
             <Route path="feedback" element={<Feedback/>}/>
        </Routes>
      </header> 
      
    </div>
  );
}

export default App;
