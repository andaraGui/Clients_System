import * as S from './styled';

//COMPONENTS
import Button from '../Button';

export default function UserRow({ name, email, age, id , setSearchUsers}) {

    return (
        <>
            <S.UserRow>
                <S.DataContainer>
                    Nome:{name} Email:{email} Idade:{age} id:{id}
                </S.DataContainer>
                <S.ButtonContainer>
                    <Button userName={name} userId={id} setSearchUsers={setSearchUsers}/> 
                    <Button userName={name} userId={id} setSearchUsers={setSearchUsers}/>
                </S.ButtonContainer>
            </S.UserRow>

        </>
    );
}