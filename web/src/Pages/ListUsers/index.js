import { useState, useEffect } from 'react';
import userAPI from "../../Services/API";

//COMPONENTS
import UserRow from '../../Components/UserRow';


export default function ListUsers() {
    const [searchUsers, setSearchUsers] = useState(true);
    const [usersList, setUsersList] = useState([]);
    

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
            <ul>
                {usersList.map( (elem, index) =>{
                    return <li> < UserRow key={index} name={elem.name} email={elem.email} age={elem.age} id={elem._id} setSearchUsers={setSearchUsers} /> </li>
                })}
            </ul>
        </>
    );
}