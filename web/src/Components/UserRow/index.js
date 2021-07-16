import { useState } from 'react'
import Button from '../Button';
import EditUserForm from '../EditUserForm';

import userAPI from '../../Services/API';

import * as S from './styled';

export default function UserRow({ name, email, age, id, setSearchUsers }) {

    const [showForm, setShowForm] = useState(false);

    function editUser() {
        setShowForm(true);
    }

    async function deleteUser() {
        await userAPI.delete(id)
            .then(response => {
                alert(`Usuário ${response.name} excluido com sucesso!`)
            })
            .catch(error => {
                console.log(error);
            })

        setSearchUsers(true);

    }


    return (
        <S.UserRow>
            <S.DataContainer>
                <span>Nome:{name} Email:{email} age:{age} </span>
            </S.DataContainer>
            {showForm ?
                <EditUserForm name={name} email={email} age={age} setShowForm={setShowForm} setSearchUsers={setSearchUsers} />
                :<S.ButtonsContainer>
                    <Button buttonContent={'Editar'} buttonFunction={editUser} />
                    <Button buttonContent={'Deletar'} buttonFunction={deleteUser} />
                </S.ButtonsContainer>
            }
        </S.UserRow>
    );
}