import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { apiUsers } from '../../services/api';

//Style
import * as S from './styled';
import { darkBlue } from '../../Colors/colors';

export default function Login({ setLoggedIn, loggedIn }) {

    //LOGIN FORM
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //REGISTER FORM
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    //LOGIN VALIDATION
    const [showLogin, setShowLogin] = useState(true);

    //PASSWORD VALIDATION
    const [passwordSize, setPasswordSize] = useState(false);
    const [numberInPassword, setNumberInPassword] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);

    async function registerHandler(e) {
        e.preventDefault();

        if (!passwordSize) {
            return alert('O campo de senha deve conter ao menos 6 caracteres.');
        }
        if (!numberInPassword) {
            return alert('O campo de senha deve conter ao menos 1 número.')
        }
        if (!registerName) {
            return alert('O campo de Nome é obrigatório!')
        }
        if (emailValidation === false) {
            if (!registerEmail) {
                return alert('O campo de Email é obrigatório!')
            } else {
                return alert('Preencha o campo Email com um Email válido.')
            }
        }


        await apiUsers.post(`/`, { name: registerName, email: registerEmail, password: registerPassword })
            .then(response => {
                alert(`Usuário cadastrado com sucesso.`);
            })
            .catch(error => {
                alert(`Usuário e/ou senha inválido(s) ${error}`);
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

    //REGISTER PASSWORD VALIDATIONS
    useEffect(() => {
        if (registerPassword.length > 5) {
            setPasswordSize(true);
        } else {
            setPasswordSize(false);
        }

        setNumberInPassword(false);
        registerPassword.split('').forEach(elem => { if (elem % 1 === 0) { setNumberInPassword(true) } })

    }, [registerPassword]);

    //REGISTER EMAIL VALIDATIONS
    useEffect(() => {
        setEmailValidation(false);
        if (registerEmail) {
            registerEmail.split('').forEach(elem => { if (elem === ".") { setEmailValidation(true) } });
            if (emailValidation === true) {
                setEmailValidation(false);
                registerEmail.split('').forEach(elem => { if (elem === "@") { setEmailValidation(true) } });
            }
        }
    }, [registerEmail])

    return (
        <S.Content>
            <S.FormContainer>
                {loggedIn && <Redirect to="/" />}

                <S.ButtonsContainer>
                    <button id="btn-1" onClick={() => setShowLogin(true)}
                        style={{ backgroundColor: showLogin && `${darkBlue}`, color: showLogin && '#fff' }}>
                        ENTRAR
                    </button>
                    <button id="btn-2" onClick={() => setShowLogin(false)}
                        style={{ backgroundColor: !showLogin && `${darkBlue}`, color: !showLogin && '#fff' }}>
                        CADASTRAR
                    </button>
                </S.ButtonsContainer>

                {showLogin === true ?
                    <>
                        <h1>Login</h1>
                        <form>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                            <button onClick={loginHandler}>ENTRAR</button>
                            <span onClick={() => setShowLogin(false)}>Ainda não tem uma conta? Cadastre-se</span>
                        </form>
                    </>

                    :
                    <>
                        <h1>Cadastro de usuário</h1>
                        <form>
                            <input type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder="Nome" required />
                            <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Email" required />
                            <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Senha" required />
                            {!numberInPassword && registerPassword.length > 0 && <span>* Senha deve conter ao menos 1 número</span>}
                            {!passwordSize && registerPassword.length > 0 && <span>* Senha deve conter mais de 6 caracteres</span>}
                            <button onClick={registerHandler}>CRIAR CONTA</button>
                        </form>
                    </>
                }




            </S.FormContainer>
        </S.Content>
    )

}