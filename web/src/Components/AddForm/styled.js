import styled from 'styled-components';
import { darkBlue, lightBlue } from '../../Colors/colors';

export const FormContainer = styled.div`
    background-color: ${lightBlue};
    display: flex;
    flex-direction: column;
    width: 60%;
    border-radius: 10px;
    margin: auto;
    color: white;
    font-family: 'roboto', sans-serif;
    text-align: center;
    
    button{
        background-position: center;
        background-size: 14px;
        background-repeat: no-repeat;
        width: 70px;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-size: 16px;
        }
        &:active{
            background-size: 14px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
    }

    input{
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin: 20px;
        &:focus{
            outline: none;
        }
    }

   

`

export const ButtonsContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;

    button{
        margin: 5px 0px;
        padding: 10px;
        margin: 20px;
    }
`