import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/hooks";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const doLogin = async () => {
        await login({ username, password });
        navigate('/');
    };
    return <div>
        <h1>ورود</h1>
        <br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={doLogin}>login</button>
    </div >;
}