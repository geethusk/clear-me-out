import React from 'react'
import "./Style.css"
import { useState } from 'react';
import InputField from '../Components/InputField';

const SignUp = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [formErrorData,setFormErrorData]=useState({
        fullNameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:"",
    });
        const {fullName,email,password,confirmPassword}=formData;
        const {fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;

        const onChange=(key,value)=>{
            setFormData({
                ...formData,
               [key]: value,   //to set the value which is sending as key,  we need to take the value inside key .
            })

        }
        const onError=(key,value)=>{
            setFormErrorData({
                ...formErrorData,
               [key]: value,  //to set the value which is sending as key,  we need to take the value inside key .
            })
        }

            const signUpCall=(e)=>{
                e.preventDefault();
                !confirmPassword?         // same as if ->(else->if)
                onError("confirmPasswordError","Confirm Your Password"):
                password!==confirmPassword?
                onError("confirmPasswordError","Password Miss Match"):
                onError("confirmPasswordError","");
            }

    return (
        <div className="main-container">
            <div className="sub-container">
            <h1> Sign Up</h1>
            <form onSubmit={signUpCall}>
                    <InputField
                        value={fullName}
                        onChange={(value)=>onChange("fullName",value)}
                        label="Full Name"
               
                    />
                  <InputField
                        value={email}
                        onChange={(value)=>onChange("email",value)}
                        label="Email"
               
                    />
                 <InputField
                        value={password}
                        onChange={(value)=>onChange("password",value)}
                        label="password"
                        type="password"
               
                    />
                   <InputField
                        value={confirmPassword}
                        onChange={(value)=>onChange("confirmPassword",value)}
                        label="confirmPassword"
                        type="password"
                        error={confirmPasswordError}
                    />
                <button type="submit" className="sign-up-button">Sign Up</button>
         
                </form>
         </div>   
    </div>

    )
}

export default SignUp
