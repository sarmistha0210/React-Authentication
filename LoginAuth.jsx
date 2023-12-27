import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginAuth = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    console.log(user);
  return (
    <div>
       <button onClick={() => loginWithRedirect()}>Log In</button>
       <button onClick={(e) => logout()}>
      Log Out
    </button>
    </div>
  )
}

export default LoginAuth
