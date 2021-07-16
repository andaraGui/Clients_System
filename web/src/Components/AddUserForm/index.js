import { useState } from "react";
import userAPI from "../../Services/API";
import Button from "../Button";


export default function AddUserForm({ setSearchUsers, setAddUserIsVisible }) {

    const [tempName, setTempName] = useState('');
    const [tempEmail, setTempEmail] = useState('');
    const [tempAge, setTempAge] = useState('');

    async function addUser(event) {
        event.preventDefault()
        await userAPI.post(`/`, { name: tempName, email: tempEmail, age: tempAge })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        setSearchUsers(true);
    }

    return (
        <>
            <form>
                Nome: <input type="text" onChange={(e) => setTempName(e.target.value)} value={tempName} />
                Email: <input type="email" onChange={(e) => setTempEmail(e.target.value)} value={tempEmail} />
                Age: <input type="number" onChange={(e) => setTempAge(e.target.value)} value={tempAge} />
            </form>
            <Button buttonFunction={addUser} buttonContent={'OK'} />
            <Button buttonFunction={() => setAddUserIsVisible(false)} buttonContent={'CANCEL'} />
        </>
    );
}