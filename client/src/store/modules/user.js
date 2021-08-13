﻿import { getUserAPI } from 'store/apis/user';
import { dbService } from 'firebase.js';
import firebase from "firebase";
const { produce } = require('immer');


// Actions
const LIKE_USER  = 'user/LIKE_USER';
const NONELIKE_USER = 'user/NONELIKE_USER';

// Action 생성자
export const likeUser = (payload) => {
  return {
    type: LIKE_USER,
    payload,
  }
};

export const noneLikeUser = (payload) => {
  return {
    type: NONELIKE_USER,
    payload,
  }
};  

// Reducer
const initialState = {
  data: [],
  post: '',
};


const reducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LIKE_USER:
        draft.data = action.payload.user[0];
        draft.post = action.payload.postId;
        // console.log(draft.data.user_like_posts);
        // console.log(draft.data.user_id);
        // console.log(draft.post);
        let postIds = [];
        postIds.push(draft.post);
        dbService.collection('users').doc(draft.data.user_id).update({
          user_like_posts: firebase.firestore.FieldValue.arrayUnion(postIds),      
        });
      break;
      case NONELIKE_USER:
        draft.data = action.payload.user[0];
        draft.post = action.payload.postId;
        // console.log(draft.data.user_like_posts);
        // console.log(draft.data.user_id);
        dbService.collection('users').doc(draft.data.user_id).update({
          user_like_posts: draft.data.user_like_posts.filter((elem) => elem !== draft.post),      
        });
      break;
      default:
        return prevState;
    }
  });
};

// thunk
export const userMiddleware = (userId, postId, type) => async dispatch => {
  try{
    const response = await getUserAPI(userId);
    let arr = {user: [], postId};
    response.forEach(doc => {
      arr.user.push(doc.data());
    })
    if(type === 'like'){
      dispatch(likeUser(arr));
    }else{
      dispatch(noneLikeUser(arr));
    }
  }catch(error){
    console.log(error);
  }
}

export default reducer;


