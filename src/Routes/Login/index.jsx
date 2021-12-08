import React from 'react'
import "./Style.css"
import InputField from '../Components/InputField'
import { useState,useEffect } from 'react'
import { isValidEmail } from '../../Utility/validation'

const Login = () => {
    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
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
   
    useEffect(()=>{
        formValidate();
    },[formData])

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
            setIsFormSubmitted(true);
                if(formValidate()){
                    console.log("Login success");
                }
                
        }
        const formValidate=()=>{
            let isValidForm=true;
            if(!email){
                onError("emailError","email is not valid");
                isValidForm=false;
            }else
            if(!isValidEmail(email)){
                onError("emailError"," "); 

            }
            if(!password){
                onError("passwordError","password cannot be empty");
                isValidForm=false;
            }else{
                if(password.length<=7){
                    onError("passwordError","password must be 8 letter long");
                    isValidForm=false;
                }
                else{
                    onError("passwordError","");

                }
            } 
            return isValidForm;
        
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
                    isFormSubmitted={isFormSubmitted}
                    />
                <InputField
                        value={password}
                        onChange={(value)=>
                        onChange("password",value)
                    }
                    label="Password"
                    type="password"
                    error={passwordError}
                    isFormSubmitted={isFormSubmitted}
                    />
                <button type="submit" className="sign-up-button">Login</button>
         
                </form>
         </div>   
    </div>

    )
}


export default Login
