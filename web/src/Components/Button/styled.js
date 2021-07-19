import styled from "styled-components";

export const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 0px 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover{
        background-size: 70%;
    }
    &:active{
        background-size: 60%;
    }
    
`