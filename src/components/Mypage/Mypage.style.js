import styled, { keyframes, css } from 'styled-components';
import { flex, hideScrollbar } from './styleConstatns';

const purple = '#D980FA';

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 55px);
  ${flex};
  flex-direction: row;
  caret-color: transparent;
`;

const leftclose = keyframes`
  from {
    transform: translateX(0rem);
  }
  to {
    transform: translateX(-10.5rem);
  }
`;

const leftshow = keyframes`
  from {
    transform: translateX(-10.5rem);
  }
  to {
    transform: translateX(0rem);
  }
`;

const show = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: flex;
    opacity: 1;
  }
`;

const Contents = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 20px;
  position: absolute;
  ${flex};
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0 0 4px ${purple};
  background-color: rgb(0, 0, 0, 0.5);
  margin-bottom: 5rem;
  @media screen and (max-width: 320px) {
    width: 90vw;
  }
  ${({ check }) => {
    if (check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          display: none;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        transform: translateX(-10.5rem);
        animation: ${leftclose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        animation: ${leftshow} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
`;

const BackImage = styled.div`
  width: 100%;
  padding: 1rem 0;
  ${flex};
  flex-direction: row;
  background-color: rgb(0, 0, 0, 0.3);
  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    background-color: rgb(255, 255, 255, 0.1);
    color: white;
    width: 15rem;
    padding: 1rem;
    border-radius: 10px;
    transform: translateY(1.5rem);
  }
  span {
    color: white;
    font-size: 1.2rem;
  }
  i {
    font-size: 4rem;
    color: white;
    background: darkgray;
    border-radius: 50%;
  }
  ${({ uid }) => {
    if (uid) {
      return css`
        padding: 2rem 0;
      `;
    }
    if (!uid) {
      return css`
        padding: 1.5rem 0;
      `;
    }
  }}
`;

const Title = styled.span`
  word-break: break-all;
  line-height: 1.5;
  margin-left: 1rem;
  max-width: 12rem;
  ${flex};
  ${(props) => {
    if (props.name.length >= 3) {
      return css`
        flex-direction: column;
      `;
    } else {
      return css`
        flex-direction: row;
      `;
    }
  }}
  span:first-child {
    margin-right: 0.5rem;
    text-align: center;
  }
  span:last-child {
    font-size: 1.1rem;
  }
  b:first-child {
    color: #409bf0;
  }
  b:last-child {
    font-size: 1.1rem;
  }
`;

const ListArea = styled.div`
  width: 100%;
  height: 25rem;
  ${flex};
  justify-content: flex-end;
  margin-top: 1rem;
  p {
    background-color: rgb(255, 255, 255, 0.1);
    color: white;
    width: 15rem;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    cursor: pointer;
    i {
      width: 1rem;
      margin-right: 0.7rem;
      color: rgb(255, 255, 255, 0.7);
    }
  }
  li {
    width: 13rem;
    padding: 1rem 0;
    margin: 0 1rem;
    color: white;
    cursor: pointer;
    i {
      width: 1rem;
      margin-right: 0.7rem;
      text-align: center;
      color: rgb(255, 255, 255, 0.7);
    }
  }
  li:nth-child(2n) {
    border-top: 1px rgb(255, 255, 255, 0.2) solid;
    border-bottom: 1px rgb(255, 255, 255, 0.2) solid;
  }
`;

const ListAreaUl = styled.ul`
  width: 15rem;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.1);
  ${({ uid }) => {
    if (uid) {
      return css`
        margin-bottom: 3rem;
      `;
    }
    if (!uid) {
      return css`
        margin-bottom: 2rem;
      `;
    }
  }}
`;

const rightclose = keyframes`
  from {
    transform: translateX(0rem);
    opacity: 0;
  }
  to {
    transform: translateX(10.5rem);
    opacity: 1;
  }
`;

const rightshow1 = keyframes`
  from {
    transform: translateX(10.5rem);
    opacity: 1;
  }
  to {
    transform: translateX(0rem);
    opacity: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 20rem;
  height: 30rem;
  margin-bottom: 5rem;
  border-radius: 20px;
  ${flex};
  color: white;
  overflow: hidden;
  box-shadow: 0 0 4px ${purple};
  background-color: rgb(0, 0, 0, 0.5);
  animation: ${rightclose} 800ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  @media screen and (max-width: 320px) {
    width: 90vw;
  }
  ${({ check }) => {
    if (check) {
      return css`
        @media screen and (max-width: 740px) {
          animation: ${show} 800ms;
          transform: translateX(0rem);
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        transform: translateX(10.5rem);
        animation: ${rightclose} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
    if (!check) {
      return css`
        @media screen and (max-width: 740px) {
          display: none;
          animation: ${show} 800ms;
          animation-iteration-count: 1;
          animation-direction: normal;
        }
        animation: ${rightshow1} 800ms;
        animation-iteration-count: 1;
        animation-direction: normal;
      `;
    }
  }}
  ul {
    height: 26rem;
    overflow-y: scroll;
    ${flex};
    justify-content: flex-start;
    ${hideScrollbar};
    li:nth-child(1) {
      text-align: center;
      font-size: 1.2rem;
      width: 15rem;
      padding-bottom: 1.5rem;
      background: #011942;
      position: fixed;
      top: 2rem;
      i {
        position: absolute;
        font-size: 1.5rem;
        top: -0.1rem;
        left: 0rem;
      }
      i:hover {
        cursor: pointer;
      }
    }
    li:nth-child(2){
      margin-top: 2.7rem;
    }
  }
`;

const Logincontainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ul {
    width: 20rem;
    height: 12rem;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px solid #ff73b3;
    li:nth-child(1) {
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    button {
      width: 5rem;
      height: 2rem;
      font-weight: bold;
      color: #fff;
      background: #ff73b3;
      border: none;
      outline: none;
      margin: 0.2rem;
      border-radius: 10px;
    }
    button:nth-child(2){
      /* background: #fcc2dd;
      color: black; */
      background: darkgray;
    }
    button:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

export {
  Container,
  Contents,
  Content,
  BackImage,
  ListArea,
  ListAreaUl,
  Title,
  Logincontainer,
};
