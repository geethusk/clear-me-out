import React from 'react'
import "./Style.css"
import InputField from '../Components/InputField'
import { useState } from 'react'

const Login = () => {
    const [formData,setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const {fullName,email,password,confirmPassword}=formData;
    const onChange=(key,value)=>{
        setFormData({
            ...formData,
           [key]: value,   //to set the value which is sending as key,  we need to take the value inside key .
        })

    }
    return (
        <div className="main-container">
            <div className="sub-container">
            <h1> Login</h1>
            <form>
                  <InputField
                        value={email}
                        onChange={(value)=>
                        onChange("email",value)
                    }
                    label="Email"
                    />
                <InputField
                        value={password}
                        onChange={(value)=>
                        onChange("password",value)
                    }
                    label="Password"
                    type="password"
                    />
                <button type="submit" className="sign-up-button">Login</button>
         
                </form>
         </div>   
    </div>

    )
}

export default Login
