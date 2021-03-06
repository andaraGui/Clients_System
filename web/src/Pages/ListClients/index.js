import { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

//COMPONENTS
import UserRow from '../../Components/UserRow';

//API
import { apiClients } from '../../services/api';

//Assets
import orderByIcon from '../../Assets/orderByIcon.png'


export default function ListClients() {

    const [refreshUsers, setRefreshUsers] = useState(true);
    const [usersData, setUsersData] = useState([]);




    function getUsers() {
        const headers = {
            'Content-Type': 'string',
            'Authorization': `${localStorage.getItem('token')}`
        }
        apiClients.get('/', { headers: headers })
            .then(response => {
                setUsersData(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }



    useEffect(() => {
        if (refreshUsers === true) {
            getUsers();
            setRefreshUsers(false);
        }
    }, [refreshUsers]);


    return (
        <S.MainContainer>
            <Link to='/add-user'> <button >Adicionar cliente</button></Link>
            <h1>Lista de Clientes</h1>
                <S.UsersTable>
                    <thead>
                        <tr>
                            <th align="left"><img alt="filter icon" src={`${orderByIcon}`} />Name</th>
                            <th align="left">Email</th>
                            <th align="left">Telefone</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((elem, index) => {

                            return (

                                <UserRow key={index} name={elem.name} email={elem.email} phone={elem.phone} id={elem._id} index={index} setRefreshUsers={setRefreshUsers} />

                            );
                        })}
                    </tbody>
                </S.UsersTable>
        </S.MainContainer>
    );
}