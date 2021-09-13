import styled, { css } from 'styled-components';

const white = "#fff";
const pink = "#ff73b3";


const Header = styled.header`
  height: 100%;
  .table {
    display: table;
    width: 100%;
    height: 100%;
  }

  .table-cell {
    display: table-cell;
    vertical-align: top;
    transition: all 0.5s;
    text-align: center;
  }

  .container {
    position: relative;
    width: 600px;
    margin: 30px auto 0;
    height: 320px;
    background-color: #999ede;
    top: 50%;
    margin-top: -160px;
    transition: all 0.5s;
  }
  .container .box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .container .box:before,
  .container .box:after {
    content: ' ';
    position: absolute;
    left: 152px;
    top: 50px;
    background-color: #9297e0;
    transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);
    width: 300px;
    height: 285px;
    transition: all 0.5s;
  }
  .container .box:after {
    background-color: #a5aae4;
    top: -10px;
    left: 80px;
    width: 320px;
    height: 180px;
  }
  .container .container-forms {
    position: relative;
  }
  /* .container .btn {
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    width: 60px;
    color: ${white};
    background-color: ${pink};
    opacity: 1;
    transition: all 0.5s;
  } */

  .container .btn:hover {
    opacity: 0.7;
  }
  .container .btn,
  .container input {
    padding: 10px 15px;
  }
  .container input {
    margin: 0 auto 15px;
    display: block;
    width: 220px;
    transition: all 0.3s;
    border-radius: 10px;
    border: 1px solid lightgray;
  }
  .container input:nth-child(1) {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  /* .container p {
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    word-break: keep-all;
    position: absolute;
    top: 0;
  } */
  .container p:nth-child(1) {

  }
  .container p:nth-child(2) {
  
  }
  .container .container-forms .container-info {
    text-align: left;
    font-size: 0;
  }
  .container .container-forms .container-info .info-item {
    text-align: center;
    font-size: 16px;
    width: 300px;
    height: 320px;
    display: inline-block;
    vertical-align: top;
    color: ${white};
    opacity: 1;
    transition: all 0.3s;
  }
  /* .container .container-forms .container-info .info-item p {
    font-size: 20px;
    margin: 20px;
  } */
  /* .container .container-forms .container-info .info-item p:nth-child(1) {
    margin: 7.5rem auto 1rem auto;
  } */
  /* .container .container-forms .container-info .info-item .btn {
    background-color: transparent;
    border: 1px solid ${white};
    padding: 12px 6px;
  } */
  .container .container-forms .container-info .info-item .table-cell {
    padding-right: 35px;
  }
  .container
    .container-forms
    .container-info
    .info-item:nth-child(2)
    .table-cell {
    padding-left: 35px;
    padding-right: 0;
  }
  .container .container-form {
    overflow: visible;
    position: absolute;
    left: 30px;
    top: -30px;
    width: 305px;
    height: 380px;
    background-color: ${white};
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }
  .container .container-form:before {
    content: '✔';
    position: absolute;
    left: 160px;
    top: -50px;
    color: #5356ad;
    font-size: 130px;
    opacity: 0;
    transition: all 0.5s;
  }
  /* .container .container-form .btn {
    position: relative;
    width: 40%;
    margin-top: 0.7rem;
    border: none;
    border-radius: 10px;
  } */
  .container .container-form .findPassword {
    position: relative;
    width: 7.5rem;
    border: none;
    padding: 10px 0;
    border-radius: 10px;
    margin-top: 0.5rem;
    background: #aba9a9;
    color: white;
    :hover {
      cursor: pointer;
      background: #bab8b8;
    }
  }
  .container .form-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all 0.5s;
  }
  .container .form-item.sign-up {
    position: absolute;
    left: -100%;
    opacity: 0;
  }
  .container.log-in .box:before {
    position: absolute;
    left: 180px;
    top: 62px;
    height: 265px;
  }
  .container.log-in .box:after {
    top: 22px;
    left: 192px;
    width: 324px;
    height: 220px;
  }
  .container.log-in .container-form {
    left: 265px;
  }
  .container.log-in .container-form .form-item.sign-up {
    left: 0;
    opacity: 1;
  }
  .container.log-in .container-form .form-item.log-in {
    left: -100%;
    opacity: 0;
  }
`;

const btn = css`
  position: relative;
  width: 7.5rem;
  margin-top: 0.7rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  color: ${white};
  transition: all 0.5s;
`;

const Btn = styled.button`
  ${btn};
  background: ${pink};
  ${(props) => {
    if (props.pw) {
      return css`
        margin-top: 0.7rem;
      `;
    } else {
      return css`
        margin-top: 2rem;
      `;
    }
  }} 
`;

const Btn2 = styled.button`
  ${btn};
  margin-top: 2rem;
  background: #1DA1F2;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.2rem;
    margin: 0.7rem 0;
  }
  button {
    margin: 0.7rem 0;
    /* border: 1px solid white; */
    border: none;
    outline: none;
    color: #9297E0;
    font-size: 1rem;
    font-weight: bold;
    background: rgb(255,255,255,0.7);
    /* border-radius: 10px; */
    :hover {
      cursor: pointer;
    }
  }
`;

const error = css`
  position: absolute;
  top: 0rem;
  background: white;
  border: 3px solid ${pink};
  margin: 0 10%;
  width: 80%;
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 10;
  div {
    position: absolute;
    top:0;
    /* left:0;
    transform: translate(-0.5rem, 1.2rem) rotate(45deg); */
    width: 0.7rem;
    height: 0.7rem;
    background: white;
    border-bottom: 3px solid ${pink};
    border-left: 3px solid ${pink};
    z-index: 0;
  } 
`;

const Error1 = styled.p`
  ${error};
  transform: translate(16rem, 4.6rem);
  div {
    left:0;
    transform: translate(-0.5rem, 1.2rem) rotate(45deg);
  }
`;

const Error2 = styled.p`
  ${error};
  transform: translate(16rem, 8rem);
  div {
    left:0;
    transform: translate(-0.5rem, 1.2rem) rotate(45deg);
  }
`;

const Error3 = styled.p`
  ${error};
  transform: translate(-16rem, 4.6rem);
  div {
    right:0;
    transform: translate(0.5rem, 1.2rem) rotate(225deg);
  }
`;

const Error4 = styled.p`
  ${error};
  transform: translate(-16rem, 8rem);
  div {
    right:0;
    transform: translate(0.5rem, 1.2rem) rotate(225deg);
  }
`;

export { Header, Btn, Btn2, Box, Error1, Error2, Error3, Error4 };
