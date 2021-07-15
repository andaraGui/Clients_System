import { useState, useEffect } from 'react';
import axios from 'axios';

//COMPONENTS
import UserRow from "./Components/UserRow";
import UserForm from './Components/UserForm';


function App() {

  const [listUsers, setListUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState(true);

  function getUsers() {
    axios.get('http://localhost:3333/users')
      .then(response => {
        setListUsers(response.data)
        setSearchUsers(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(()=>{
    if(searchUsers === true) getUsers();
  },[searchUsers])

  return (
    
    <>
      <UserForm setSearchUsers={setSearchUsers}/>
      {listUsers.map((elem) => {
        return <UserRow key={elem._id}  id={elem._id} name={elem.name} email={elem.email} age={elem.age} setSearchUsers={setSearchUsers}/>
      })}
    </>
  );
}

export default App;
