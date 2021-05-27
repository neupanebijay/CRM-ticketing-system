import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/reset-password/ResetPassword.comp'
import "./Entry.style.css"


export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoader, setFormLoader] = useState("login");

    const handleOnChange = (e) => {
        const {name, value } = e.target
        switch(name){
            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;
            default:
                break;
        };
        
    }

    // Login form handler
    const handleOnSubmit= e => {
        e.preventDefault();
        if(!email || !password){
            alert("please enter your email and password")
        }
        // Backend APi intergration 
        console.log(email,password);
    }


// reset password handler
    const handleOnReserSubmit= e => {
        e.preventDefault();
        if(!email){
            alert("please enter your email")
        }
        // Backend APi intergration 
        console.log(email);
    }

    const formSwitcher = text => {
        setFormLoader(text);
    }

    return (
        <div className="entry-page bg-secondary">

            
            <Jumbotron className="form-box">
                {formLoader === "login" && 
                    <LoginForm email={email} 
                    password={password} 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher= {formSwitcher}
                    /> 
                 }
            
                {formLoader === "reset" && 
                    <ResetPassword email={email}
                     password={password} 
                     handleOnChange={handleOnChange}
                     handleOnReserSubmit={handleOnReserSubmit}
                     formSwitcher={formSwitcher}
                     />
                }
                
            </Jumbotron>
            
        </div>
    )
}
