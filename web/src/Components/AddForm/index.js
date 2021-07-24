import { useState } from 'react';
import * as S from './styled';
import { Link, Redirect } from 'react-router-dom';

//API
import { apiClients } from '../../services/api';

//Assets
import submitIcon from '../../Assets/confirme.png';
import returnIcon from '../../Assets/retornar.png';

export default function AddForm() {

    const [redirectHome, setRedirectHome] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function submitHandler(event) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
        event.preventDefault();
        await apiClients.post('/', { name: name, email: email, phone: phone }, { headers: headers })
            .then(response => {
                alert(`Usuário ${name} inserido com sucesso!`)
            })
            .catch(error => {
                console.log(error);
            })
        setRedirectHome(true);
    }

    return (
        <S.FormContainer>
            <h1>Adicionar usuário</h1>
            <form>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <S.ButtonsContainer>
                    <Link to='/'> <button style={{ backgroundColor: `${'#6DDCFF'}`, backgroundImage: `url(${returnIcon})` }}></button></Link>
                    <button onClick={submitHandler} style={{ backgroundColor: `${'#38F69B'}`, backgroundImage: `url(${submitIcon})` }} ></button>
                </S.ButtonsContainer>
                {redirectHome && <Redirect to='/' />}
            </form>
        </S.FormContainer>
    );
}