import { useState } from 'react';

import {apiUsers} from '../../services/api';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function buttonHandler(e) {
        e.preventDefault();
        await apiUsers.post(`/auth`, {email: email, password: password})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                alert(`Usuário e/ou senha inválido(s)`)
            })
    }

    return (
        <>
            <form>
                Login: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                Senha: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={buttonHandler}>ENTRAR</button>
            </form>
        </>
    )

}