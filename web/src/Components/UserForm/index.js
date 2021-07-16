import { useState, useEffect } from "react"; 
import userAPI from "../../Services/API";
import Button from "../Button";


export default function UserForm({name, email, age, id, setShowForm, setSearchUsers}){

    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempAge, setTempAge] = useState(age);

  async function temp(event){
        event.preventDefault()
        await userAPI.put(`/${id}`, {name:tempName, email: tempEmail, age: tempAge})
            .then(response=>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
        setShowForm(false);
        setSearchUsers(true);
        
    }

    return(
        <>
        <form>
            Nome: <input type="text"   onChange={(e)=> setTempName(e.target.value)} value={tempName}/>
            Email: <input type="email" onChange={(e)=> setTempEmail(e.target.value)} value={tempEmail} />
            Age: <input type="number"  onChange={(e)=> setTempAge(e.target.value)} value={tempAge}/>
        </form>
            <Button buttonFunction={temp} buttonContent={'OK'}/>
            <Button buttonFunction={()=> setShowForm(false)} buttonContent={'CANCEL'}/>        
        </>
    );
}