import * as S from './styled';

//COMPONENTS
import Button from '../Button';
//API
import userAPI from '../../Services/API';


export default function UserRow({ name, email, age, id , setSearchUsers}) {


    function editUser(){
        console.log('editar')
    }

    async function deleteUser(){
        await userAPI.delete(`/${id}`)
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error)
            })
        setSearchUsers(true);
    }

    return (
        <>
            <S.UserRow>
                <S.DataContainer>
                    Nome:{name} Email:{email} Idade:{age} id:{id}
                </S.DataContainer>
                <S.ButtonContainer>
                    <Button  buttonText={'Editar'}     buttonFunction={editUser} userName={name} userId={id} setSearchUsers={setSearchUsers}/> 
                    <Button  buttonText={'Deletar'}    buttonFunction={deleteUser} userName={name} userId={id} setSearchUsers={setSearchUsers}/>
                </S.ButtonContainer>
            </S.UserRow>

        </>
    );
}