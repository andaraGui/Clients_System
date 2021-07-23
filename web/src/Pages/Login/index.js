import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { apiUsers } from '../../services/api';


export default function Login({ setLoggedIn, loggedIn }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    async function registerHandler(e) {
        e.preventDefault();
        await apiUsers.post(`/`, { name: registerName, email: registerEmail, password: registerPassword })
            .then(response => {
                alert(`Usuário cadastrado com sucesso.`);
            })
            .catch(error => {
                alert(`Usuário e/ou senha inválido(s)`);
            })
        await apiUsers.post(`/auth`, { email: registerEmail, password: registerPassword })
            .then(response => {
                localStorage.setItem("token", response.data.token);
            })
            .catch(error => {
                alert(`Usuário e/ou senha inválido(s)`)
            })
        setLoggedIn(true);

    }


    async function loginHandler(e) {
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
            <h3>Login</h3>
            <form>
                Login: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                Senha: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginHandler}>ENTRAR</button>
            </form>


            <h3>Cadastro de usuário:</h3>
            <form>
                Nome: <input type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
                Login: <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                Senha: <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                <button onClick={registerHandler}>cadastrar</button>
            </form>
        </>
    )

}