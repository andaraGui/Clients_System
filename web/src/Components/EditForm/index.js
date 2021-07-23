import { useState } from 'react';
import Button from '../Button';
import * as S from './styled';

//API
import { apiClients } from '../../services/api';

//Assets
import confirmIcon from '../../Assets/confirme.png';
import returnIcon from '../../Assets/retornar.png';

export default function EditForm({ buttonEdit, name, email, phone, id, setRefreshUsers, setShowEditForm }) {

    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempPhone, setTempPhone] = useState(phone);

    async function submitForm() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        }
        await apiClients.put(`/${id}`, { name: tempName, email: tempEmail, phone: tempPhone }, { headers: headers })
            .then(response => {
                alert(`Usuário ${tempName} editado com sucesso!`)
            })
            .catch(error => {
                console.log(error);
            })
        setShowEditForm(false);
        setRefreshUsers(true);
    }


    return (

        <S.FormContainer >
            <td>Name: <br /><input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} required /></td>
            <td>Email:<br /><input type="email" value={tempEmail} onChange={(e) => setTempEmail(e.target.value)} /> </td>

            <td>Phone:<br /><input type="tel" value={tempPhone} onChange={(e) => setTempPhone(e.target.value)} /> </td>

            <td align="right">
                <Button buttonFunction={buttonEdit} content={returnIcon} color={'#6DDCFF'}>Cancelar</Button>
                <Button buttonFunction={submitForm} content={confirmIcon} color={'#38F69B'}>Concluir</Button>
            </td>

        </S.FormContainer>
    );
}