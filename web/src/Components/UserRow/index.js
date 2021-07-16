import { useState, useEffect } from 'react'
import Button from '../Button';
import UserForm from '../UserForm';

export default function UserRow({ name, email, age, id, setSearchUsers }) {

    const [showForm, setShowForm] = useState(false);

    function editUser() {
        setShowForm(true);
    }

    function deleteUser() {
        console.log('delete')
    }


    return (
        <>
            Nome:{name} Email:{email} age:{age} id={id}
            {showForm ? <UserForm name={name} email={email} age={age} id={id} setShowForm={setShowForm} setSearchUsers={setSearchUsers}/> :
            <>
            <Button buttonContent={'Editar'} buttonFunction={editUser} />
            <Button buttonContent={'Deletar'} buttonFunction={deleteUser} />
            </>
            }
        </>
    );
}