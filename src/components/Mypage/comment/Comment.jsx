import React, { useEffect, useRef } from 'react';
import * as S from "./Comment.style";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Comment = ({ user, ul, scroll }) => {

  const commentDB = useSelector(state => state.mypageComment.data);

  const history = useHistory();

  const arrow = useRef();

  // const scroll = document.querySelector('.sc-ksXiFW');

  const check = commentDB.length === 0;

  const onMovePage =(com) => {
    history.push({
      pathname: `/categorylist/${com.post_region}`,
      search: `?id=${com.post_id}`,
      state: {
        like: user.user_like_posts,
        bookmark: user.user_bookmark_posts,
        postData: com,
        profile: user.user_image,
        check: 'check',
      }
    });
  };

  useEffect(() => {
    if(ul.current.scrollHeight !== ul.current.clientHeight){
      arrow.current.style.display = 'block';
      scroll(arrow);
    }
  }, []);
  

  return(
    <>
      {!check && commentDB.map((com) => {
        return(
        <S.List key={com.comment_id} onClick={()=>{onMovePage(com)}} title={'게시글 보러가기'}>
          <p>{com.comment_content}</p>
          <S.Arrow ref={arrow} className="fas fa-arrow-circle-down"></S.Arrow>
        </S.List>
        )
      })}
      {check &&
        <S.Null>작성한 댓글이 없습니다</S.Null>
      }
    </>
  )
}

export default Comment;