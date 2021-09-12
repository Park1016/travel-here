import styled, { keyframes } from "styled-components";
import { frame } from "../styleConstatns";

const List = styled.li`
  p {
    ${frame};
  }
`;

const Null = styled.p`
  ${frame};
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
  display: none;
  font-size: 3rem;
  background: black;
  border-radius: 50%;
  transform: translateY( -3rem);
  animation: ${show} 4000ms;
  animation-iteration-count: infinite;
  animation-direction: normal;
`;

export { List, Null, Arrow };
