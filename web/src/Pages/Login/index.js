import { useState } from 'react';
import api from '../../services/api';


export default function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    function buttonHandler(e) {
        e.preventDefault();
        api.get(`/users`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <form>
                Login: <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                Senha: <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button onClick={buttonHandler}>ENTRAR</button>
            </form>
        </>
    )

}