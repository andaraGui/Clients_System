import styled from 'styled-components';
import {light, dark, cadetGray, blueGreen} from '../../Colors'

export const UserRow = styled.div`
    width: 50%;
    display: inline-flex;
    padding: 10px;
    border: 1px solid black;
    margin: auto;
    border-radius: 14px;
    background-color: ${blueGreen};
    color: ${dark};


`
export const DataContainer = styled.div`
    width: 80%;
`

export const ButtonContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
`
