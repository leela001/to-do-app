import React, {useState} from "react";
import './LoginPage.css'
import axios from "axios";

const SignUpPage = () => {

    const [isUserCreated, setIsUserCreated] = useState(false)

    const [signUpData, setSignUpData] = useState({
        user: {
            user_name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    })

    const handleSignUp = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/users/create_user', signUpData)
        setSignUpData({
            user: {
                user_name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        })
        setIsUserCreated(true)
    }

    return(
        <div className="signup-container">
            <h2>SignUp</h2>
            {isUserCreated && <p>User created successfully</p>}
            <form className="form" action="submit">
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" value={signUpData.user.user_name} onChange={(e) => {setSignUpData({...signUpData, user: {...signUpData.user, user_name: e.target.value}})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={signUpData.user.email} onChange={(e) => {setSignUpData({...signUpData, user: {...signUpData.user, email: e.target.value}})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={signUpData.user.password} onChange={(e) => {setSignUpData({...signUpData, user: {...signUpData.user, password: e.target.value}})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input id="confirmpassword" type="password" value={signUpData.user.password_confirmation} onChange={(e) => {setSignUpData({...signUpData, user: {...signUpData.user, password_confirmation: e.target.value}})}} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSignUp}>SignUp</button>
            </form>
        </div>
    )
}

export default SignUpPage;