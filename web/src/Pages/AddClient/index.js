import AddForm from "../../Components/AddForm";
import * as S from './styled';

export default function AddClient(){
    return(
        <S.MainContainer>
        <h1>Adicionar usuário</h1>
        <AddForm />
        </S.MainContainer>
    );
}