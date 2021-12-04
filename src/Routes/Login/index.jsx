import React from 'react'
import "./Style.css"

const Login = () => {
    return (
        <div className="login-page-container">
            <div className="main-container">
                 <div className="sub-heading">
                    <h1>Login</h1>
                </div>
                <form className="content-form">    
                     <div className="content-section">
                        <div className="login-field">
                            <div className="form-label">
                                Email
                            </div>
                                <input type="text" />
                        </div>
                    <div className="login-field">
                        <div className="form-label">
                            Password
                        </div>
                        <input type="text"/>
                    </div>
                <div className="login-section">
                        <div className="login-switch"> Login</div>
                </div>
            </div> 
            </form> 
        </div>  
    </div>
    )
}

export default Login
