import React from 'react'
import "./Style.css"
import InputField from '../Components/InputField'
import { useState } from 'react'
import { isValidEmail,isValidPassword } from '../../Utility/validation'

const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    });
    const [formErrorData,setFormErrorData]=useState({
        emailError:"",
        passwordError:"",
    });

    const {email,password}=formData;
    const {emailError,passwordError}=formErrorData;
    const onChange=(key,value)=>{
        setFormData({
            ...formData,
           [key]: value,   //to set the value which is sending as key,  we need to take the value inside key .
        })
    }
        const onError=(key,value)=>{
            setFormErrorData(prev=>({
                ...prev,
               [key]: value,  //to set the value which is sending as key,  we need to take the value inside key .
        })
        )}
        const loginCall=(e)=>{
            e.preventDefault();  //to prevent reloading
            !isValidEmail(email)? onError("emailError","email is not valid"):
            onError("emailError"," ");
            !password?onError("passwordError","Enter Password"):
            password.length<=8? onError("passwordError","password Error"):
            !isValidPassword(password)?onError("passwordError","password Error"):
            onError("password"," ");
        }

    return (
        <div className="main-container">
            <div className="sub-container">
            <h1> Login</h1>
            <form onSubmit={loginCall}>
                  <InputField
                        value={email}
                        onChange={(value)=>
                        onChange("email",value)
                    }
                    label="Email"
                    error={emailError}
                    />
                <InputField
                        value={password}
                        onChange={(value)=>
                        onChange("password",value)
                    }
                    label="Password"
                    type="password"
                    error={passwordError}
                    />
                <button type="submit" className="sign-up-button">Login</button>
         
                </form>
         </div>   
    </div>

    )
}


export default Login
