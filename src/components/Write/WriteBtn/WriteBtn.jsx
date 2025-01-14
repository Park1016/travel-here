import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from "./WriteBtn.style";


export default function WriteBtn({ isVisible }) {
  
  const title = useRef();

  const onTitleIn = () => {
    title.current.style.display = 'flex';
  };

  const onTitleOut = () => {
    title.current.style.display = 'none';
  };

  return (
    <S.Button onClick={isVisible} onMouseOver={onTitleIn} onMouseOut={onTitleOut}>
      <S.Title ref={title}>
        <p>게시글 쓰기</p>
      </S.Title>
    </S.Button>
  );
}


