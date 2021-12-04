// import {Link} from "react-router-dom"
import CategoryCard from "../Components/CategoryCard"
import CategoryImage from "../../assets/icons/CategoryImage.jpg"

const categoryList=[
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!"
    },
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!"
    },
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!"
    },
    {
        image:CategoryImage,
        title:"Electronics",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi adipisci expedita deserunt autem nihil nesciunt animi. Voluptas excepturi, ullam, accusamus sequi ducimus cupiditate repudiandae, molestias veniam perspiciatis hic quae!"
    },
]

const Home = () => {
    return (
            <div className="main-container">
              <div className="category-container">
                {categoryList.map((data,i)=><CategoryCard {...data} key={i}/>)}
              </div>
        </div>
    )
}

export default Home
