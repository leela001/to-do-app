import React, {useContext} from "react";
import { AuthContext } from "./AuthContext";
import {useNavigate} from 'react-router-dom';

const Logout = () => {

    const {logout} = useContext(AuthContext);

    const navigate = useNavigate();

    
    const handleLogout = () => {
        logout();
        navigate("/");
        sessionStorage.removeItem('token');
    }


    return(
        <div>
            {handleLogout()}
            <p>Leela paone</p>
        </div>
    )
}

export default Logout;