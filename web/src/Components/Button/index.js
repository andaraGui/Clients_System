import editIcon from '../../Assets/editIcon.png';
import * as S from './styled';

export default function Button({ content, color, buttonFunction }) {
    return (
        <>
            <S.Button style={{ backgroundColor: `${color}`, backgroundImage: `url(${content})` }}  ></S.Button>
        </>
    );
}