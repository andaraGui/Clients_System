import styled from 'styled-components';


export const FormContainer = styled.div`
    background-color: lightgray;
    width: 60%;
    margin: auto;
    
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
    span{
        margin: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
    }

    input{
        padding: 10px;
        &:active{
            border: none;
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