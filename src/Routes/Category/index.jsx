// import {Link} from "react-router-dom"
import CategoryImage from "../../assets/icons/CategoryImage.jpg"
import Pencil from "../../assets/icons/pencil.svg"
import  Eye from "../../assets/icons/eye.svg"
import "./Style.css"
import { useParams } from "react-router-dom"
const Category = () => {
    const params=useParams();
    return (
    <div className="container">
        <div className="page-section">
            <div className="page-image-container">
                    <img src={CategoryImage} alt="" /> 
            </div>
        <div className="description-container">
            <h1>{params.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nesciunt, ipsa numquam veritatis unde eum suscipit, aliquam obcaecati non, animi quis cum est ea quam delectus? Voluptas, est molestias. Quam.</p>
            <h2>Keys</h2>
            <div className="button-section">
           <button> Circuits</button>
           <button> Circuits</button>
           <button> Circuits</button>
           <button> Circuits</button>
           <button> Circuits</button>
           <button> Circuits</button>
           </div>
        </div>
         </div>
         <div className="lower-section">
            <div className="questions">
                 <h6>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati fugit delectus sed rem placeat velit cum, expedita quaerat voluptatibus cupiditate eveniet doloribus? Molestiae necessitatibus eaque excepturi, officia odio nobis.</h6>
                <div className="question-section">
                    <div className="answer-count-section">
                         <img src={Pencil} alt="" />
                            <h1>3</h1> 
                            <h4>Answers</h4>
                          <img src={Eye} alt="" />
                             <h1>315</h1> 
                             <h4>Views</h4>
                   </div>
                </div>
            </div>
        <div className="questions">
                <h6>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati fugit delectus sed rem placeat velit cum, expedita quaerat voluptatibus cupiditate eveniet doloribus? Molestiae necessitatibus eaque excepturi, officia odio nobis.</h6>
            <div className="question-section">
                <div className="answer-count-section">
                    <img src={Pencil} alt="" />
                  <h1>3</h1> 
                  <h4>Answers</h4>
                     <img src={Eye} alt="" />
                     <h1>315</h1> 
                     <h4>Views</h4>
                 </div>
                 </div>
            </div>
            
            <div className="questions">
                <h6>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati fugit delectus sed rem placeat velit cum, expedita quaerat voluptatibus cupiditate eveniet doloribus? Molestiae necessitatibus eaque excepturi, officia odio nobis.</h6>
            <div className="question-section">
             <div className="answer-count-section">
             <img src={Pencil} alt="" />
              <h1>3</h1> 
              <h4>Answers</h4>
                 <img src={Eye} alt="" />
                 <h1>315</h1> 
                 <h4>Views</h4>
             </div>
             </div>
            </div>
        </div>
        </div>
    )
}

export default Category
