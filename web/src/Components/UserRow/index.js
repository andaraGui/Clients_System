import * as S from './styled';

//COMPONENTS
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

export default function UserRow({ name, email, age, id , setSearchUsers}) {

    return (
        <>
            <S.UserRow>
                <S.DataContainer>
                    Nome:{name} Email:{email} Idade:{age} id:{id}
                </S.DataContainer>
                <S.ButtonContainer>
                    <EditButton userName={name} userId={id} setSearchUsers={setSearchUsers}/> 
                    <DeleteButton userName={name} userId={id} setSearchUsers={setSearchUsers}/>
                </S.ButtonContainer>
            </S.UserRow>

        </>
    );
}