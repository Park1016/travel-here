﻿import styled, { keyframes } from "styled-components";
import { frame } from "../styleConstatns";

const List = styled.li`
  ${frame};
  p:nth-child(1) {
    word-break: keep-all;
    margin-bottom: 0.7rem;
  }
  p:nth-child(2){
    font-size: 0.8rem;
    color: #409BF0;
  }
`;

const Null = styled.p`
  ${frame};
  transform: translateY(2.8rem);
  cursor: auto;
`;

const show = keyframes`
  from {
    transform: translateY(-3rem);
    opacity: 0.5;
  }
  25% {
    transform: translateY(0rem);
    opacity: 1;
  }
  50% {
    transform: translateY(-3rem);
    opacity: 0.5;
  }
  75% {
    transform: translateY(0rem);
    opacity: 1;
  }
  to {
    transform: translateY(-3rem);
    opacity: 0.5;
  }
`;

const Arrow = styled.i`
  position: fixed;
  bottom: 3rem;
  left: 8.5rem;
  font-size: 3rem;
  display: none;
  background: black;
  border-radius: 50%;
  transform: translateY(-3rem);
  animation: ${show} 4000ms;
  animation-iteration-count: infinite;
  animation-direction: normal;
  :hover {
    cursor: pointer;
  }
`;

export { List, Null, Arrow };
