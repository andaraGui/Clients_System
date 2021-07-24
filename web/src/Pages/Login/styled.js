import styled from 'styled-components';


export const FormContainer = styled.div`
    width: 40%;
    background-color: #00B2FF;
    height: 600px;
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
        margin: auto;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        cursor: pointer;
        background-color: white;
        color: #3593EB;
        font-family: 'Roboto', sans-serif;

        &:hover{
            background-color: #006ED3 ;
            color: white;
            transition: color .2s ease, background-color .2s ease ; ;
        }
    }

    input{
        width: 80%;
        padding: 10px;
        margin: auto;
        border-radius: 10px;
        border: none;
        font-size: 22px;
        color: gray;
        margin-bottom: -25px;

        ::placeholder{
            color: lightgray;
        }

        &:focus{
        outline: none;
        }
    }

    h1{
        margin-top: 40px;
        color: white;
    }
    
    span{
     color: lightgray;
     cursor: pointer;
    }

`
export const Content = styled.div`
    display: flex;
`

export const ButtonsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 50px;
    button{
        padding: 10px;
        font-size: 13px;
        background-color: #3593EB;
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