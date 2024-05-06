import React, {useContext} from "react";
import {NavLink} from 'react-router-dom'
import { AuthContext } from "./AuthContext";


const Navbar = () => {


    const {userAuth} = useContext(AuthContext);
    return(
        <div>
            <nav className="parent-nav">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                {!userAuth.is_user_login && <NavLink to="/login" activeClassName="active" >Login</NavLink>}
                {userAuth.is_user_created && <NavLink to="/signup" activeClassName="active">SignUp</NavLink>}
                {userAuth.is_user_login && <NavLink to="/todo">Tasks</NavLink>}
                {userAuth.is_user_logout && <NavLink to="/logout" activeClassName="active" className="logout-btn">LogOut</NavLink>}
            </nav>
        </div>
    )
}

export default Navbar;