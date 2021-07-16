import UserRow from '../../Components/UserRow';
import { useState, useEffect } from 'react';
import * as S from './styled'

//API
import userAPI from '../../Services/API';

export default function ListUsers() {

    const [userData, setUserData] = useState([]);
    const [searchUsers, setSearchUsers] = useState(true);


    function getUsers() {
        userAPI.get('/')
            .then(response => {
                setUserData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        setSearchUsers(false);
    }

    useEffect(() => {
        if (searchUsers === true) {
            getUsers();
        }
    }, [searchUsers]);

    return (
        <S.Table>
            {userData.map((elem, index) => {
                return <UserRow key={index} id={elem._id} name={elem.name} email={elem.email} age={elem.age} setSearchUsers={setSearchUsers} />
            })}
        </S.Table>
    );
}