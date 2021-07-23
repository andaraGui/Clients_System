import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { apiUsers } from '../../services/api';


export default function Login({setLoggedIn, loggedIn}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function buttonHandler(e) {
        e.preventDefault();
        await apiUsers.post(`/auth`, { email: email, password: password })
            .then(response => {
                alert(`Logged in`);
                localStorage.setItem("token", response.data.token);
            })
            .catch(error => {
                alert(`Usuário e/ou senha inválido(s)`)
            })
            setLoggedIn(true);
    }

    return (
        <>
            {loggedIn && <Redirect to="/" />}
            <form>
                Login: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                Senha: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={buttonHandler}>ENTRAR</button>
            </form>
        </>
    )

}