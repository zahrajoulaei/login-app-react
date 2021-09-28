import React, { useState,useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedin: false,
    onLogout: () => { },
    onLogin: (email,password) => { }
});

export const AuthContextProvider = (proprs) => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storeLoginInfo = localStorage.getItem('isLoggedIn');
        if (storeLoginInfo === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider
        value={{
            isLoggedin: isLoggedin,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        }}
    >{proprs.children}</AuthContext.Provider>
}

export default AuthContext;