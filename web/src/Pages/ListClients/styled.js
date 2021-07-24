import styled from 'styled-components';
import { darkBlue, lightBlue } from '../../Colors/colors';


export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const UsersTable = styled.table`
    font-family: 'roboto', 'sans-serif';
    width: 90%;
    border-collapse:collapse;
    margin: auto;
    tr{
        border: 2px solid ${lightBlue};
        #editForm{
        background-color: red;
        }
    }
    th{
        background-color: ${lightBlue};
        color: white;
        cursor: pointer;
        padding: 8px;
        width: 30%;
    }
    td{
        padding: 4px;
        background-color: white;
    }
  
`

