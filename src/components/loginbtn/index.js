import React from "react";
const login = () => {
    alert('clicked....')
}
const LoginBtn = () => {
    return(
        <div className="login-btn" onClick={login}><p>Login</p></div>
    )
}
export default LoginBtn;