import {Outlet,useNavigate} from 'react-router-dom'
import logo from "../assets/icons/ClearMeOut.svg"

const Layout = () => {
    const navigate=useNavigate();
    return (
        <div className="App">
            <header>
            <div className="main-container">
                <div className="header-section">
                    <img src={logo} alt="logo" />
                </div>
               <div 
                onClick={()=>{
                    navigate("/login")
                }}
               className="login-button">
                    Login
                </div>
                <div
                 onClick={()=>{
                     navigate("/sign-up")
                 }}
                className="sign-up-button">
                   Sign Up
                </div>
            </div>
            
            </header>
            <div className="body-container">
             <Outlet/>
            </div>
           
        </div>
    )
}

export default Layout
