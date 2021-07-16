import { useState } from 'react'
import Button from '../Button';
import EditUserForm from '../EditUserForm';

import userAPI from '../../Services/API';

export default function UserRow({ name, email, age, id, setSearchUsers }) {

    const [showForm, setShowForm] = useState(false);

    function editUser() {
        setShowForm(true);
    }

    async function deleteUser() {
        await userAPI.delete(id)
            .then(response =>{
                alert(`Usuário ${response.name} excluido com sucesso!`)
            })
            .catch(error =>{
                console.log(error);
            })
            
            setSearchUsers(true);
            
    }


    return (
        <>
            Nome:{name} Email:{email} age:{age} id={id}
            {showForm ? <EditUserForm name={name} email={email} age={age} id={id} setShowForm={setShowForm} setSearchUsers={setSearchUsers}/> :
            <>
            <Button buttonContent={'Editar'} buttonFunction={editUser} />
            <Button buttonContent={'Deletar'} buttonFunction={deleteUser} />
            </>
            }
        </>
    );
}