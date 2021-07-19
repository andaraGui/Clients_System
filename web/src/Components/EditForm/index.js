import * as S from './styled';

export default function EditForm(){
    return(
        
        <tr >
            <td>Name: <input type="text"/></td>
            <td>Email:<input type="text"/> </td>
            <td>Phone:<input type="text"/> </td>
            <td>Consulta:<input type="text"/> </td>
        </tr>
    );
}