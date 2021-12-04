import React from 'react'
import "./Style.css"
import { useState } from 'react';

const SignUp = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
        const {fullName,email,password,confirmPassword}=formData;
    return (
        <div className="main-container">
            <div className="sub-container">
            <h1> Sign Up</h1>
            <form>
                <div className="input-field">
                    <input type="text" />
                    <div className="form-label">
                        Full Name
                    </div>
                </div>
                <div className="input-field">
                    <input type="text" />
                    <div className="form-label">
                        email
                    </div>
                </div>
                <div className="input-field">
                    <input type="text" />
                    <div className="form-label">
                        Password
                    </div>
                </div>
                <div className="input-field">
                    <input type="text" />
                    <div className="form-label">
                        confirm Password
                    </div>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp
