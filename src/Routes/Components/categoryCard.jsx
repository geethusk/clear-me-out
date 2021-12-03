import { useNavigate } from "react-router-dom"

const CategoryCard = ({image,title,description}) => {
    const navigate = useNavigate();
    return (
        <div className="category-card"
            onClick={
                ()=>{
                navigate("/category/"+title)
            }}
        >
            <img className="category-card-image" src={image} alt={title} />
            <div className="details-section" >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default CategoryCard

