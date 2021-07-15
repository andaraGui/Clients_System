import * as S from './styled';
import axios from 'axios';
export default function DeleteButton({ userName, userId, setSearchUsers }) {

    function deleteUser() {

        axios.delete(`http://localhost:3333/users/${userId}`)
            .then(response => {
                alert(`Usuário "${userName}" excluido com sucesso!`);
                setSearchUsers(true);
            })
            .catch(error => {
                console.log(error);
            })

    }

    function deleteConfirm() {
        const confirmDelete = window.confirm(`Tem certeza que deseja EXCLUIR o usuário "${userName}" do banco de dados?`);
        if (confirmDelete) {
            deleteUser()
        }
    }

    return (
        <>
            <button onClick={deleteConfirm}>Deletar</button>
        </>
    );
}