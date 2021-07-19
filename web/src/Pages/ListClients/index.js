import * as S from './styled';

//COMPONENTS
import Button from '../../Components/Button';

//Assets
import deleteIcon from '../../Assets/deleteIcon.png'
import editIcon from '../../Assets/editIcon.png'
import expandIcon from '../../Assets/expandIcon.png'
import orderByIcon from '../../Assets/orderByIcon.png'
import UserRow from '../../Components/UserRow';
import EditForm from '../../Components/EditForm';

export default function ListClients() {

    const fakeData = [
        {
            name: 'Guilherme Andara',
            email: 'gui@gui.com',
            phone: '(51)99999-8888'
        },
        {
            name: 'Jorge Andara',
            email: 'Jorge@gui.com',
            phone: '(51)99999-8888'
        }

    ]

    return (
        <>
            <h1>ListClients</h1>
            <S.UsersTable>
                <tr>
                    <th><img src={`${orderByIcon}`} />Name</th>
                    <th><img src={`${orderByIcon}`} />Email</th>
                    <th><img src={`${orderByIcon}`} />Telefone</th>
                    <th></th>
                </tr>
                {fakeData.map((elem, index) => {
                    
                    return ( 
                            <>                     
                            <UserRow name={elem.name} email={elem.email} phone={elem.phone} index={index} />                         
                            </>
                    );
                })}
            </S.UsersTable>
        </>
    );
}