import * as S from './styled';
import { useState } from 'react'
import axios from 'axios';
export default function UserForm({ setSearchUsers }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    function submitForm() {
        axios.post('http://localhost:3333/users/adduser', { name, email, age })
            .then(response => {
                setSearchUsers(true);
                alert('Usuário inserido com sucesso')
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    return (
        <>
            <form>
                <ul>
                    <li>nome: <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="name" placeholder="Digite seu nome" required /></li>
                    <li>email <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="Digite seu email" required /> </li>
                    <li>age <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} name="age" placeholder="Digite sua idade" required /></li>
                    <button type="submit" onClick={submitForm}>Adicionar</button>
                </ul>
            </form>
        </>
    );
}