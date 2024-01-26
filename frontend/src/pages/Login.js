import './login.css'
import { createContext } from "react";

async function handleLogin() {
    const username = document.querySelector('#username').value
    console.log(username)

    const password = document.querySelector('#password').value

    const res = await fetch("http://localhost:3000/api/auth/login", {
        method: 'POST',
        headers: {'content-Type': 'application/json'},  // headers, mode, and json.stringify
        mode: 'cors',
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
}

export default function Login() {
    return (
        <div>
            <input placeholder='username' id='username'/>
            <input placeholder='password' id='password'/>
            <button className='login-button' onClick={() => handleLogin()}>Login</button>
        </div>
    );
}
