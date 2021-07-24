import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { apiUsers } from '../../services/api';
import * as S from './styled';


export default function Login({ setLoggedIn, loggedIn }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [showLogin, setShowLogin] = useState(true);

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
                setLoggedIn(true);
            })
            .catch(error => {
                console.log(error)
                alert(`Usuário e/ou senha inválido(s)`)
            })

    }

    return (
        <S.Content>
            <S.FormContainer>
                {loggedIn && <Redirect to="/" />}

                <S.ButtonsContainer>
                    <button id="btn-1" onClick={() => setShowLogin(true)}
                        style={{ backgroundColor: showLogin && '#006ED3', color: showLogin && '#fff' }}>
                        ENTRAR
                    </button>
                    <button id="btn-2" onClick={() => setShowLogin(false)}
                        style={{ backgroundColor: !showLogin && '#006ED3', color: !showLogin && '#fff' }}>
                        CADASTRAR
                    </button>
                </S.ButtonsContainer>

                {showLogin === true ?
                    <>
                        <h1>Login</h1>
                        <form>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                            <button onClick={loginHandler}>ENTRAR</button>
                            <span onClick={() => setShowLogin(false)}>Ainda não tem uma conta? Cadastre-se</span>
                        </form>
                    </>

                    :
                    <>
                        <h1>Cadastro de usuário</h1>
                        <form>
                            <input type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder="Nome" />
                            <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Email" />
                            <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Senha" />
                            <button onClick={registerHandler}>CRIAR CONTA</button>
                        </form>
                    </>
                }




            </S.FormContainer>
        </S.Content>
    )

}