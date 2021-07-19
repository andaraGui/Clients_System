import * as S from './styled';

export default function Button({ content, color, buttonFunction }) {
    return (
        <>
            <S.Button onClick={()=> {buttonFunction()}} style={{ backgroundColor: `${color}`, backgroundImage: `url(${content})` }}  ></S.Button>
        </>
    );
}