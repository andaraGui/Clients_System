import styled from 'styled-components';
import { darkBlue, lightBlue } from '../../Colors/colors';


export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
        padding: 15px;
        margin: 10px auto;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        cursor: pointer;
        background-color: ${lightBlue};
        color: white;
        font-family: 'Roboto', sans-serif;

        &:hover{
            background-color: ${darkBlue} ;
            color: white;
            transition: color .2s ease, background-color .2s ease ; ;
        }
        &:active{
            border-radius: 8px;
        }
    }

    h1{
        color: ${lightBlue};
        font-family: 'roboto';

    }
`


export const UsersTable = styled.table`
    font-family: 'roboto', 'sans-serif';
    width: 90%;
    margin: auto;
    border-collapse:collapse;
    
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

