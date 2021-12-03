

const categoryCard = ({image,title,description}) => {
    return (
        <div className="category-card">
            <img className="category-card-image" src={image} alt={title} />
            <div className="details-section">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default categoryCard

