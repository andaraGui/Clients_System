import * as S from './styled';
import axios from 'axios';
export default function DeleteButton({userName, userId, setSearchUsers}){

    function deleteHandler(){
        axios.delete(`http://localhost:3333/users/${userId}`)
            .then(response =>{
                alert(`Usuário : ${userName} excluido com sucesso!`);
                setSearchUsers(true);
            })
            .catch(error =>{
                console.log(error);
            })
    }

    return(
        <>
            <button onClick={deleteHandler}>Deletar</button>
        </>
    );
}