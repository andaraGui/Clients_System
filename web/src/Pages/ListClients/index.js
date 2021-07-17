import * as S from './styled';

export default function ListClients(){

    const fakeData = [
        {
            name: 'Guilherme Andara',
            email: 'gui@gui.com',
            phone: '(51)99999-8888',
            apointment: '10/10/21'
        },
        {
            name: 'Jorge Andara',
            email: 'Jorge@gui.com',
            phone: '(51)99999-8888',
            apointment: '07/08/21'
        }

    ]

    return(
        <>
        <h1>ListClients</h1>
        <S.UsersTable>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Próx. Consulta</th>
                <th></th>
            </tr>  
            {fakeData.map((elem, index)=> {
                return(
                <tr key={index}>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    <td>{elem.apointment}</td>
                    <button>edit</button>
                    <button>delet</button>
                </tr>
                );
            })}
        </S.UsersTable>
        </>
    );
}