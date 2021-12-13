import React from 'react'
import './index.css'

const AskQuestions = () => {
    return (
        <div className='c-container'>
            <div className="outer">
            <div className="outer-border">
                <h1>Ask A Question</h1>
                <div className="category-list">
                    <h2>Category</h2>
                    <div className='drop-down-box'>
                        <select>
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                        </select>
                    </div>
                </div>
                <div className='text-area'>
                    <h2>Question</h2>
                    <textarea rows='5' cols='50' />
                    <button className='sign-up-button'>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AskQuestions

