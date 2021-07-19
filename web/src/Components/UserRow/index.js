import * as S from './styled';

//Assets
import deleteIcon from '../../Assets/deleteIcon.png';
import editIcon from '../../Assets/editIcon.png';
import expandIcon from '../../Assets/expandIcon.png';

//COMPONENTS
import Button from '../Button';
import EditForm from '../EditForm';

function buttonEdit(){

}

function buttonDelete(){

}


export default function UserRow({ name , email, phone , apointment, index  }){
    return(
        <>
        <S.RowContainer key={index}>
        <td><img src={`${expandIcon}`}/>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{apointment}</td>
        <td>
        <Button content={editIcon} color={'#6DDCFF'} />
        <Button content={deleteIcon} color={'#FF5E5E'} />
        </td>
        </S.RowContainer>
        </>
    );
}