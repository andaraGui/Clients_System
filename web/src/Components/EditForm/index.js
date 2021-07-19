import { useState } from 'react';
import Button from '../Button';
import * as S from './styled';

export default function EditForm({ buttonFunction, name, email, phone }) {
    
    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempPhone, setTempPhone] = useState(phone);

    function submitForm(name, email, phone){    

    }


    return (

        <S.FormContainer >
            <td>Name: <br/><input type="text" value={tempName} onChange={(e)=> setTempName(e.target.value) } /></td>
            <td>Email:<br/><input type="text" value={tempEmail} onChange={(e)=> setTempEmail(e.target.value) } /> </td>
            <td>Phone:<br/><input type="text" value={tempPhone} onChange={(e)=> setTempPhone(e.target.value) } /> </td>
            <Button buttonFunction={submitForm} type="submit" color={'#38F69B'}>Concluir</Button>
            <Button buttonFunction={buttonFunction}  color={'#FF5E5E'}>Cancelar</Button>
        </S.FormContainer>
    );
}