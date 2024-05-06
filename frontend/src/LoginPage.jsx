import React, {useState, useContext} from "react";
import './LoginPage.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "./AuthContext";



const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        sessionStorage.getItem('token')
        sessionStorage.setItem("token", user.email)
        setLoginErrorMessage("");
        try {
            const resp = await axios.post('http://localhost:3000/login', user)
            if (resp.status === 200) {
                navigate("/todo")
                login();
                sessionStorage.setItem('token', resp.data.token)
            }
        } catch (error) {
            setLoginErrorMessage(error.response.data.error);
        }
    }

    return(

        <div className="container">
            <div className="login-container">
                <h2>Login</h2>
                {loginErrorMessage !== "" && <p style={{color: 'red'}}>{loginErrorMessage}</p>}
                <form className="form" action="submit">
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input id="username" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                    </div>
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    {/* <button className="btn" onClick={handleLogout}>LogOut</button> */}
                </form>
            </div>
        </div>


    )


}

export default Login