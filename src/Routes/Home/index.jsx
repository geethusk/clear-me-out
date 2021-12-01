import {Link} from "react-router-dom"
import CategoryCard from "../Components/categoryCard.jsx"

const Home = () => {
    return (
            <div className="main-container">
              <div className="category-container">
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
              </div>
        </div>
    )
}

export default Home
