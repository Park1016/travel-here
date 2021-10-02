import styled from 'styled-components';

const pink = "#ff73b3";

const LoginBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Logincontainer = styled.div`
  width: 30rem;
  height: 25rem;
  background: white;
  position: relative;
  margin: auto;
  transform: translateY(7rem);
  padding: 20px;
  z-index: 100;
  padding: 60px 68px 40px 68px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    width: 20rem;
  }
`;

const Header = styled.header`
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      width: 100%;
      i {
        font-size: 5rem;
        transform: translateY(1rem);
        margin-bottom: 3rem;
        color: orange;
      }
      h1 {
        font-size: 2rem;
        transform: translateY(-100%);
        @media screen and (max-width: 500px) {
          font-size: 1.5rem;
          font-weight: bold;
          transform: translateY(-120%);
        }
      }
      .inputEmail {
        display: block;
        width: 100%;
        padding: 8px;
        margin: 1rem 0 1.5rem 0;
        height: 2rem;
        border-radius: 12px;
        outline: none;
        border: 1px solid lightgray;
      }
      .sendEmailBtn {
        border: none;
        width: 80%;
        height: 2.5rem;
        border-radius: 12px;
        color: #fff;
        background-color: ${pink};
        cursor: pointer;
        font-size: 18px;
        margin-top: 1rem;
        :hover {
          transform: scale(1.01);
        }
        @media screen and (max-width: 500px) {
          width: 100%;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

const BackBtn = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  top: 1.3em;
  left: 1em;
`;


export { Header, Logincontainer, LoginBg, BackBtn };
