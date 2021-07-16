import { useState, useEffect } from 'react';
import userAPI from "../../Services/API";

//COMPONENTS
import UserRow from '../../Components/UserRow';
import AddUserForm from '../../Components/AddUserForm';
import Button from '../../Components/Button';


export default function ListUsers() {
    const [searchUsers, setSearchUsers] = useState(true);
    const [usersList, setUsersList] = useState([]);
    const [addUserIsVisible, setAddUserIsVisible] = useState([false])
    

    function getUsers() {
        userAPI.get('/')
            .then(response => {
                setUsersList(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (searchUsers === true) {
            getUsers();           
            setSearchUsers(false);
        }
        
    }, [searchUsers]);

    return (
        <>
            {addUserIsVisible === true ? <AddUserForm setAddUserIsVisible={setAddUserIsVisible} setSearchUsers={setSearchUsers}/> :   <Button buttonContent={'Adicionar usuário'} buttonFunction={() => setAddUserIsVisible(true)} />} 
          
            <ul>
                {usersList.map( (elem, index) =>{
                    return <li  key={index} > < UserRow name={elem.name} email={elem.email} age={elem.age} id={elem._id} setSearchUsers={setSearchUsers} /> </li>
                })}
            </ul>
        </>
    );
}