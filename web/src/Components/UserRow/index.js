import { useState } from 'react';
import * as S from './styled';

//Assets
import deleteIcon from '../../Assets/deleteIcon.png';
import editIcon from '../../Assets/editIcon.png';
import expandIcon from '../../Assets/expandIcon.png';

//API
import {apiClients} from '../../services/api';

//COMPONENTS
import Button from '../Button';
import EditForm from '../EditForm';



export default function UserRow({ name, email, phone, id, setRefreshUsers }) {


    const [showEditForm, setShowEditForm] = useState(false)

    function buttonEdit() {
        if (showEditForm === false) {
            setShowEditForm(true);
        } else {
            setShowEditForm(false);
        }
    }

    async function buttonDelete() {
        if (window.confirm(`Você realmente excluir o usuário ${name} do sistema?`)) {
            await apiClients.delete(`/${id}`)
                .then(response => {
                    alert(`Usuário ${response.data.name} deletado com sucesso.`)
                })
                .catch(error => {
                    console.log(error);
                })
        }

        setRefreshUsers(true);
    }

    return (
        <>
            <S.RowContainer >
                <td><img  alt="expand Icon" src={`${expandIcon}`} />{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td align="right">
                    <Button content={editIcon} color={'#6DDCFF'} buttonFunction={buttonEdit} />
                    <Button content={deleteIcon} color={'#FF5E5E'} buttonFunction={buttonDelete} />
                </td>
            </S.RowContainer>
            {showEditForm && <EditForm buttonEdit={buttonEdit} name={name} email={email} phone={phone} id={id} setRefreshUsers={setRefreshUsers} setShowEditForm={setShowEditForm} />}
        </>
    );
}