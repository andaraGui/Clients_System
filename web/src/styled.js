import styled from 'styled-components';
import { lightBlue, darkBlue } from './Colors/colors';


export const Button = styled.button`
        margin: 10px auto;
        border-radius: 10px;
        font-size: 10px;
        padding: 8px;
        border: none;
        cursor: pointer;
        background-color: ${lightBlue};
        color: white;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
        &:hover{
            background-color: ${darkBlue} ;
            color: white;
            transition: color .2s ease, background-color .2s ease ; ;
        }
        &:active{
            border-radius: 8px;
        }
`

