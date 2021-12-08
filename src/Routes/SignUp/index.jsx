import React, { useEffect } from 'react'
import "./Style.css"
import { useState } from 'react';
import InputField from '../Components/InputField';
import { isValidEmail} from '../../Utility/validation';

const SignUp = () => {
    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
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
    useEffect(()=>{
        formValidate();
    },[formData])
        const {fullName,email,password,confirmPassword}=formData;
        const {fullNameError,emailError,passwordError,confirmPasswordError}=formErrorData;

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
            }))
        }


            const signUpCall=(e)=>{
                e.preventDefault();
                setIsFormSubmitted(true);
                if(formValidate()){
                    console.log("sign up success");
                }
                //<--confirm password error-->//
            }
            const formValidate=()=>{
                let isValidForm=true;
                if(!confirmPassword){
                    onError("confirmPasswordError","Confirm Your Password");
                    isValidForm=false;
                }         // same as if ->(else->if)
                else{
                    if(password!==confirmPassword){
                        onError("confirmPasswordError","Password Miss Match")
                        isValidForm=false;
                    }else{
                        onError("confirmPasswordError","");
                    }
                }
                //<--full Name error section-->//
                if(!fullName){
                    onError("fullNameError","full name cannot be empty");
                    isValidForm=false;
                }else{
                    if(fullName.length<=3){
                        onError("fullNameError","kindly provide your full name");
                        isValidForm=false;
                    }else{
                        onError("fullNameError","");
                    }
                }
                
                 

                //<--email error section-->//
                // !email?
                // onError("emailError","Email cannot be empty"):
                if(!isValidEmail(email)){
                    onError("emailError","email is not valid");
                    isValidForm=false;
                }else{
                    onError("emailError","");
                }
                //<--password error section-->//
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
            <h1> Sign Up</h1>
            <form onSubmit={signUpCall}>
                    <InputField 
                        value={fullName}
                        onChange={(value)=>onChange("fullName",value)}
                        label="Full Name"
                        error={fullNameError}
                        isFormSubmitted={isFormSubmitted}
               
                    />
                  <InputField
                        value={email}
                        onChange={(value)=>onChange("email",value)}
                        label="Email"
                        error={emailError}
                        isFormSubmitted={isFormSubmitted}
               
                    />
                 <InputField
                        value={password}
                        onChange={(value)=>onChange("password",value)}
                        label="password"
                        type="password"
                        error={passwordError}
                        isFormSubmitted={isFormSubmitted}
                    />
                   <InputField
                        value={confirmPassword}
                        onChange={(value)=>onChange("confirmPassword",value)}
                        label="confirmPassword"
                        type="password"
                        error={confirmPasswordError}
                        isFormSubmitted={isFormSubmitted}
                    />
                <button type="submit" className="sign-up-button">Sign Up</button>
         
                </form>
         </div>   
    </div>

    )
}

export default SignUp
