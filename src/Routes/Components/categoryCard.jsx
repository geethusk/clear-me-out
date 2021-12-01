import React from 'react'
import categoryImage from "../../assets/icons/CategoryImage.jpg"

const categoryCard = () => {
    return (
        <div className="category-card">
            <img src={categoryImage} alt="" />
            <div className="details-section">
                <h1>Electronics</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!</p>
            </div>
            
        </div>
    )
}

export default categoryCard

