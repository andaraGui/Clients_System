import UserRow from '../../Components/UserRow';
import { useState, useEffect } from 'react';

//API
import userAPIController from '../../Services/userAPIController';

export default function ListUsers() {

    const [refreshUsers, setRefreshUsers] = useState(true);

    useEffect(async () => {
            if (refreshUsers === true) {
                let teste = []
                teste = userAPIController.findAllUsers(teste);
                await teste
                console.log(teste)
            }

    }, [refreshUsers]);

    return (
        <>
            <UserRow />
        </>
    );
}