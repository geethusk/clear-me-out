import {Outlet,useNavigate} from 'react-router-dom'
import logo from "../assets/icons/ClearMeOut.svg"
import { useSelector,useDispatch } from 'react-redux';

const Layout = () => {
    const navigate=useNavigate();
    const isLoggedIn=useSelector(state => state.isLoggedIn)
    const dispatch=useDispatch()
    return (
        <div className="App">
            <header>
            <div className="main-container">
                <div className="header-section">
                    <img src={logo} alt="logo" />
                </div>
                {!isLoggedIn ?<>
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
                </>:
                <div className='logout-button' onClick={()=>{
                    dispatch({
                        type:"LogOut"
                    })
                }}>LogOut</div>}
            </div>
            
            </header>
            <div className="body-container">
           <Outlet/>    {/* //header okke  outlet il aanu ullath */}
            </div>
           
        </div>
    )
}

export default Layout
