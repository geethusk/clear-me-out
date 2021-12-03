// import {Link} from "react-router-dom"
import CategoryImage from "../../assets/icons/CategoryImage.jpg"
import "./Style.css"
const Category = () => {
    return (
    <div className="container">
        <div className="page-section">
            <div className="page-image-container">
                    <img src={CategoryImage} alt="" /> 
            </div>
        <div className="description-container">
            <h1>Electronics</h1>
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
        
    </div>
    )
}

export default Category
