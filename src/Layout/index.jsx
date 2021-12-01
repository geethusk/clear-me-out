import {Outlet} from 'react-router-dom'
import logo from "../assets/icons/ClearMeOut.svg"

const Layout = () => {
    return (
        <div className="App">
            <header>
            <div className="main-container">
                <div className="header-section">
                    <img src={logo} alt="logo" />
                </div>
                <div className="login-button">
                    Login
                </div>
                <div className="sign-up-button">
                   Signup
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
