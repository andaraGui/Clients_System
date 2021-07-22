import { useState } from 'react';
import * as S from './styled';
import { Link, Redirect } from 'react-router-dom';

//API
import {apiClients} from '../../services/api';

//Assets
import submitIcon from '../../Assets/confirme.png';
import returnIcon from '../../Assets/retornar.png';

export default function AddForm() {

    const [redirectHome, setRedirectHome] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    async function submitHandler(event) {
        event.preventDefault();
        await apiClients.post('/', { name: name, email: email, phone: phone })
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
            <form>
                <span>Nome:</span><input type="text" placeholder="João da Silva" value={name} onChange={(e) => setName(e.target.value)} />
                <span>Email:</span><input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span>Phone:</span><input type="tel" placeholder="(51)89987-8879" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <S.ButtonsContainer>
                    <Link to='/'> <button style={{ backgroundColor: `${'#6DDCFF'}`, backgroundImage: `url(${returnIcon})` }}></button></Link>
                    <button onClick={submitHandler} style={{ backgroundColor: `${'#38F69B'}`, backgroundImage: `url(${submitIcon})` }} ></button>
                </S.ButtonsContainer>
                {redirectHome && <Redirect to='/' />}
            </form>
        </S.FormContainer>
    );
}