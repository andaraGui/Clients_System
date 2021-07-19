import Button from '../Button';
import * as S from './styled';

export default function EditForm(){
    return(
        
        <S.FormContainer >
            <td>Name: <input type="text"/></td>
            <td>Email:<input type="text"/> </td>
            <td>Phone:<input type="text"/> </td>
            <Button color={'#38F69B'}>Concluir</Button>
            <Button color={'#FF5E5E'}>Cancelar</Button>
        </S.FormContainer>
    );
}