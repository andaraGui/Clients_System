import { useState, useEffect } from 'react';
import * as S from './styled';

//Assets
import deleteIcon from '../../Assets/deleteIcon.png';
import editIcon from '../../Assets/editIcon.png';
import expandIcon from '../../Assets/expandIcon.png';

//COMPONENTS
import Button from '../Button';
import EditForm from '../EditForm';



export default function UserRow({ name, email, phone, index }) {


    const [showEditForm, setShowEditForm] = useState(false)

    function buttonEdit() {
        if(showEditForm === false){
            setShowEditForm(true);
        }else{
            setShowEditForm(false);
        }
        
    }

    function buttonDelete() {

    }
    return (
        <>
            <S.RowContainer key={index}>
                <td><img src={`${expandIcon}`} />{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <Button content={editIcon} color={'#6DDCFF'} buttonFunction={buttonEdit}/>
                    <Button content={deleteIcon} color={'#FF5E5E'} />
                </td>
            </S.RowContainer>
            { showEditForm &&  <EditForm buttonFunction={buttonEdit} name={name} email={email} phone={phone} />}
        </>
    );
}