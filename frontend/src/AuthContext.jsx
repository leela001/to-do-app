import React, { useState } from "react";


export const AuthContext = React.createContext();

export const AuthContextProvider = (({children}) => {


    const [userAuth, setUserAuth] = useState({
        is_user_login: false,
        is_user_created: true,
        is_user_logout: false
    })

    const login = () => {
        setUserAuth({...userAuth, is_user_login: true, is_user_logout: true, is_user_created: false})
    }

    const logout = () => {
        setUserAuth({...userAuth, is_user_login: false, is_user_logout: false, is_user_created: true})
    }

    const isUserCreated = () => {
        setUserAuth({...userAuth, is_user_created: true})
    }

    return(
        <AuthContext.Provider value={{userAuth, login, logout, isUserCreated}}>
            {children}
        </AuthContext.Provider>
    )
})