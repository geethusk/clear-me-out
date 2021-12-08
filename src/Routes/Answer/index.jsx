import React from 'react'
import  Eye from "../../assets/icons/eye.svg"
import Pencil from "../../assets/icons/pencil.svg"
import "./Answer.css"

const Answer = () => {
    return (
        <div className="main-container">
            <div className="upper-container">
                <div className="answer-section">
                    <h1>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus placeat nostrum. Rerum provident dignissimos quae omnis animi praesentium reprehenderit? A, explicabo aliquid aut vel veritatis corrupti laborum delectus nisi. </h1>
                </div>
                <div className="button-section">
                    <button> Circuits</button>
                    <button> Circuits</button>
                    <button> Circuits</button>
                </div>
                <div className="answer-count-section">
                    <div className="counter-section">
                         <img src={Pencil} alt="" />
                            <h1>3</h1> 
                            <h4>Answers</h4>
                    </div>
                    <div className="eye-section-container">
                        <img src={Eye} alt="" />
                             <h1>315</h1> 
                             <h4>Views</h4>
                    </div>
                    <div className="date-field">
                        <h4>Date:</h4><h1>11/12/2021</h1>
                    </div>
                             
                    
                        
                </div>
            
        <div className="sub-section">
            <div className="lower-part">
                <h1>Vishnu</h1>
                <div className="date-section">
                    <h4>Date:</h4>
                    <h3>11/12/2021</h3>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae voluptate, sint est ullam quidem impedit aperiam laudantium similique, sequi perferendis. Sunt rerum atque corporis tempore. Voluptate consequatur qui hic!</h1>
            </div>
            <div className="lower-part">
                <h1>Vishnu</h1>
                <div className="date-section">
                    <h4>Date:</h4>
                    <h3>11/12/2021</h3>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae voluptate, sint est ullam quidem impedit aperiam laudantium similique, sequi perferendis. Sunt rerum atque corporis tempore. Voluptate consequatur qui hic!</h1>
            </div>
            <div className="lower-part">
                <h1>Vishnu</h1>
                <div className="date-section">
                    <h4>Date:</h4>
                    <h3>11/12/2021</h3>
                </div>
                <h1 className="text-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae voluptate, sint est ullam quidem impedit aperiam laudantium similique, sequi perferendis. Sunt rerum atque corporis tempore. Voluptate consequatur qui hic!</h1>
            </div>      
        </div>
        </div>
    </div>
    )
}

export default Answer
