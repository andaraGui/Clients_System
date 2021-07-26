import styled from 'styled-components';
import { darkBlue, lightBlue } from '../../Colors/colors';

export const FormContainer = styled.div`
    width: 40%;
    background-color: #00B2FF;
    text-align: center;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    margin: auto;

    form{  
        display: flex;
        flex-direction: column;
        height: 60%;
    }

    button{
        width: 84%;
        padding: 15px;
        margin: 10px auto;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        cursor: pointer;
        background-color: white;
        color: ${lightBlue};
        font-family: 'Roboto', sans-serif;

        &:hover{
            background-color: ${darkBlue} ;
            color: white;
            transition: color .2s ease, background-color .2s ease ; ;
        }
    }

    input{
        width: 80%;
        margin: 5px auto;
        border-radius: 10px;
        padding: 10px;
        border: none;
        font-size: 22px;
        color: gray;

        ::placeholder{
            color: lightgray;
        }

        &:focus{
        outline: none;
        }
    }

    h1{
        color: white;
    }
    
    span{
     color: lightgray;
     cursor: pointer;
    }

`
export const Content = styled.div`
    height: 90vh;
      width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    button{
        padding: 10px;
        font-size: 13px;
        background-color: ${lightBlue};
        color: white;
        &:hover{
            background-color:white ;
            color: #006ED3;
            transition: color .2s ease, background-color .2s ease ; ;
        }
    }

    #btn-1{
        border-radius: 10px 0 0 10px;
    }
    #btn-2{
        border-radius: 0 10px 10px 0;
    }
`