import React, { useState } from "react";


export const AuthContext = React.createContext();

export const AuthContextProvider = (({children}) => {


    const [userAuth, setUserAuth] = useState({
        is_user_login: false,
        is_user_created: true,
        is_user_logout: false,
        user_details: {
            id: '',
            name: '',
            email: '',
            tasks_count: ''
        }
    })

    const login = () => {
        setUserAuth({...userAuth, is_user_login: true, is_user_logout: true, is_user_created: false})
    }

    const logout = () => {
        setUserAuth({...userAuth, is_user_login: false, is_user_logout: false, is_user_created: true, user_details: {}})
    }

    const isUserCreated = () => {
        setUserAuth({...userAuth, is_user_created: true})
    }

    const setUserDeatils = (user) => {
        setUserAuth({...userAuth, user_details: {id: user.id, name: user.name, email: user.email, tasks_count: user.tasks_count}})
    }

    return(
        <AuthContext.Provider value={{userAuth, login, logout, isUserCreated, setUserDeatils}}>
            {children}
        </AuthContext.Provider>
    )
})