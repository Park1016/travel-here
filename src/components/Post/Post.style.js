﻿import styled, { keyframes } from "styled-components";
import {
  flex,
  marginTop,
  fontSize,
  hideScrollbar,
  cursorPointer,
} from "./styleConstants.js";

const gray = "#e3e3e3";
const darkGray = "#afafaf";
const red = "#ed4956";
const blue = "#9980fa";
const lightPurple = "#b8a6ff";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  ${flex};
  caret-color: transparent;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 100;
`;

const showPost = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Contents = styled.div`
  width: 30rem;
  background-color: white;
  border-radius: 10px;
  padding: 3rem 0;
  position: relative;
  ${flex};
  animation: ${showPost} 500ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  @media screen and (max-width: 500px) {
    width: 25rem;
    height: 30rem;
    padding: 2rem 0;
  }
  @media screen and (max-width: 420px) {
    width: 22rem;
    padding: 1rem 0;
  }
  @media screen and (max-width: 360px) {
    width: 20rem;
  }
  ul {
    width: 27rem;
    max-height: 40rem;
    overflow-y: scroll;
    ${flex}
    align-items: flex-start;
    justify-content: flex-start;
    ${hideScrollbar};
    /* overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: lightgray;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: darkgray;
    }
    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    } */
    
    @media screen and (max-width: 500px) {
      width: 23rem;
    }
    @media screen and (max-width: 420px) {
      width: 20rem;
    }
    @media screen and (max-width: 360px) {
      width: 18rem;
    }
  }
`;

const Header = styled.li`
  width: 100%;
  ${flex};
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  padding-bottom: 1rem;
  z-index: 11;
  @media screen and (max-width: 500px) {
    padding-bottom: 0.5rem;
  }
  span {
    ${flex};
    flex-direction: row;
    justify-content: flex-start;
    span {
      font-size: 1.2rem;
      font-weight: bold;
      max-width: 12rem;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media screen and (max-width: 500px) {
        font-size: 1rem;
        max-width: 7.5rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 1rem;
        max-width: 5rem;
      }
    }
    p {
      height: 1.5rem;
      padding: 0.2rem 0.5rem 0rem 0.5rem;
    }
    p:nth-child(2) {
      font-size: 0.8rem;
      color: #009432;
      background-color: #e1facf;
      border-radius: 10px;
      margin: 0 0.5rem;
      line-height: 1.2;
      @media screen and (max-width: 500px) {
        font-size: 0.6rem;
        line-height: 1.7;
      }
    }
    p:nth-child(3) {
      font-size: 0.7rem;
      color: #883997;
      background-color: #fce3fc;
      border-radius: 10px;
      line-height: 1.5;
      @media screen and (max-width: 500px) {
        font-size: 0.6rem;
        line-height: 1.7;
      }
    }
    i {
      margin-left: 1rem;
      ${cursorPointer};
    }
  }
  div {
    i {
      outline: none;
      border: none;
      background-color: transparent;
      margin-left: 1rem;
      ${cursorPointer};
    }
    div {
      position: absolute;
    }
  }
`;

const editDelToggle = styled.div`
  ${flex};
  ${cursorPointer};
  width: 4rem;
  border-radius: 10px;
  background-color: white;
  border: 1px solid ${gray};
  transform: translate(-0.8rem, 1rem);
  box-shadow: 0 0 4px ${gray};
  div {
    position: absolute;
    top: 0;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-top: 1px solid ${gray};
    border-left: 1px solid ${gray};
    transform: translate(0rem, -0.55rem) rotate(0.125turn);
    box-shadow: 0 0 4px ${gray};
  }
  p {
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;
  }
  p:nth-child(2) {
    border-bottom: 1px solid ${gray};
    background-color: white;
    z-index: 10;
    color: #409bf0;
  }
  p:nth-child(3) {
    color: ${red};
  }
`;

const Profile = styled.li`
  ${flex};
  flex-direction: row;
  margin-top: 2rem;
  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    background-color: pink;
  }
  p {
    margin: 0 0.5rem;
  }
  span {
    font-weight: bold;
    font-size: 0.8rem;
    color: lightgray;
  }
  i {
    font-size: 3rem;
    color: darkgray;
    background: white;
    border-radius: 50%;
    transform: translateX(0.04rem);
  }
`;

const Title = styled.li`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.5;
`;

const Content = styled.li`
  width: 100%;
  margin: 1rem 0 2rem 0;
  font-size: 0.9rem;
  line-height: 1.2;
  textarea {
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    background: white;
  }
`;

const Like = styled.li`
  width: 100%;
  ${marginTop};
  ${flex};
  flex-direction: row;
  justify-content: space-between;
  span {
    ${flex};
    flex-direction: row;
    font-size: 0.8rem;
    span {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 1rem;
      font-weight: bold;
    }
    i {
      font-size: 1rem;
      margin-right: 0.3rem;
      color: ${red};
    }
  }
  i {
    position: relative;
    font-size: 1.2rem;
    ${cursorPointer};
    color: darkgray;
  }
`;

const showBookmark = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  to {
    display: none;
  }
`;

const Bookmark = styled.i`
  position: relative;
  font-size: 1.2rem;
  ${cursorPointer};
  color: darkgray;
  div {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    border: 1px solid lightgray;
    border-radius: 10px;
    text-align: center;
    padding: 0.2rem 0.5rem;
    font-weight: normal;
    font-size: 0.8rem;
    transform: translateY(-1.5rem);
    color: black;
    z-index: 20;
    animation: ${showBookmark} 1500ms;
    animation-iteration-count: 1;
    animation-direction: normal;
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 40rem;
  border-radius: 20px;
  @media screen and (max-width: 510px) {
    width: 25rem;
    height: 35rem;
  }
  @media screen and (max-width: 420px) {
    width: 20rem;
    height: 30rem;
  }
`;

const show = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.01);
  }
`;

const Alert = styled.div`
  position: absolute;
  width: 20rem;
  background: white;
  border: 1px solid ${blue};
  box-shadow: 0 0 5px ${blue};
  font-weight: bold;
  animation: ${show} 200ms;
  animation-iteration-count: 2;
  animation-direction: normal;
  div:nth-child(1) {
    ${flex};
    justify-content: flex-start;
    height: 12rem;
    i {
      font-size: 4rem;
      margin: 3rem 0 2rem 0;
      color: ${blue};
    }
  }
  div:nth-child(2) {
    ${flex};
    padding: 3rem 0 2rem 0;
    button {
      ${cursorPointer};
      border: none;
      width: 15rem;
      height: 2.5rem;
      font-size: 0.9rem;
      font-weight: bold;
      border-radius: 10px;
    }
    button:hover {
      transform: scale(1.01);
    }
    button:nth-child(1) {
      background: ${lightPurple};
      color: white;
      margin-bottom: 0.5rem;
    }
    button:nth-child(2) {
      background: white;
      border: 1px solid ${lightPurple};
      color: ${darkGray};
    }
  }
`;

const AlertText1 = styled.p`
  margin-bottom: 1rem;
`;

const AlertText2 = styled.p`
  color: ${darkGray};
`;

const Test = styled.div`
  position: absolute;
  width: 30rem;
  height: 50rem;
  background: rgb(255, 255, 255, 0.5);
  z-index: 20;
`;

const arrow = keyframes`
  from {
    transform: translateY(-5rem);
    /* opacity: 0.5; */
  }
  25% {
    transform: translateY(-2rem);
    /* opacity: 1; */
  }
  50% {
    transform: translateY(-5rem);
    /* opacity: 0.5; */
  }
  75% {
    transform: translateY(-2rem);
    /* opacity: 1; */
  }
  to {
    transform: translateY(-5rem);
    /* opacity: 0.5; */
  }
`;

const Arrow = styled.i`
  font-size: 3rem;
  width: 2.95rem;
  height: 2.95rem;
  color: #1A46A0;
  background-color: white;
  position: absolute;
  text-align: center;
  border-radius: 50%;
  bottom: 0;
  transform: translateY(-5rem);
  animation: ${arrow} 4000ms;
  animation-iteration-count: infinite;
  animation-direction: normal;
  z-index: 50;
  :hover {
    ${cursorPointer};
  }
`;

const DownText = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  transform: translate(-4.5rem, -3.5rem);
  width: 12rem;
  padding: 0.3rem 0.2rem;
  border-radius: 10px;
  color: white;
  background: rgb(0, 0, 0, 0.5);
  font-size: 1.2rem;
`;

export {
  Container,
  Contents,
  Header,
  editDelToggle,
  Profile,
  Title,
  Content,
  Like,
  Img,
  Bookmark,
  Alert,
  AlertText1,
  AlertText2,
  Test,
  Arrow,
  DownText,
};
