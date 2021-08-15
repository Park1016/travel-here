import React, { useState, useRef } from 'react';
import * as S from "./Post.style";
import Comment from 'components/Comment/Comment';
import PostSlider from './PostSlider/PostSlider';


const Post = ({postData, profile, setIsPostModalOpened}) => {
  const { post_religion, post_title, post_content, post_like, post_photo, post_id } = postData

  // 내가 해당 게시글에 좋아요을 했나 안 했나 표시
  let [likePost, setLikePost] = useState(false);
  // 내가 해당 게시글에 찜을 했나 안 했나 표시
  let [bookmarkPost, setBookmarkPost] = useState(false);
  
  const comment = useRef();

  // 좋아요 아이콘 토글 -> 할 때마다 firestore에 저장 되어야 함
  const onLikeToggle = () => {
    if(likePost){
      setLikePost(false);
    }else{
      setLikePost(true);
    }
  };

  // 찜 아이콘 토글
  const onBookmarkToggle = () => {
    if(bookmarkPost){
      setBookmarkPost(false);
    }else{
      setBookmarkPost(true);
    }
  };
  
  // 모달창 닫기
  const onHideModal = () => {
    setIsPostModalOpened(false);
  };  

  console.log(post_photo)
  return (
    <S.Container>
      <S.Contents>
        <ul ref={comment}>
          <S.Header>
            <span>
              <span>영국</span>
              <p>#{post_religion}</p>
            </span>
            <i onClick={onHideModal} className="fas fa-times"></i>
          </S.Header>
          <PostSlider postImages={post_photo}/>
          <S.Profile>
            <img src={profile} alt="프로필 이미지입니다"></img>
            <p>Park HyunJeong</p> {/* post_writer로 검색?*/}
            <span>15min</span>
          </S.Profile>
          <S.Title>{post_title}</S.Title>
          <S.Content>{post_content}</S.Content>
          <S.Like>
            <span>
              {likePost ?
              <i onClick={onLikeToggle} className="fas fa-heart"></i> :
              <i onClick={onLikeToggle} className="far fa-heart"></i>}
              <span>{post_like}</span><p>명</p>이 좋아합니다
            </span>
            {bookmarkPost ?
            <i onClick={onBookmarkToggle} className="fas fa-bookmark"></i> :
            <i onClick={onBookmarkToggle} className="far fa-bookmark"></i>}
          </S.Like>
          <Comment profile={profile} postId={post_id} />
        </ul>
      </S.Contents>
    </S.Container>
  );
};

export default Post;
