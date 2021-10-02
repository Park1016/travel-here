import styled from 'styled-components';

const Footer = styled.footer`
  height: 100%;
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    transform: translateY(300px);
    margin-top: 0.5rem;
    li {
      button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
        span:nth-child(1) {
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          border-radius: 50%;
          box-shadow: 0 0 5px lightgray;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          :hover {
            transform: translateY(0.05rem);
          }
        }
        span:nth-child(2) {
          /* font-size: 0.9rem; */
          display: none;
        }
      }
    }
  }
  .closeBtn {
    position: absolute;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 24px;
    top: 1em;
    right: 1em;
    @media screen and (max-width: 620px) {
      transform: translate(1.6rem, -1.4rem);
    }
  }
`;

const Google = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Git = styled.i`
  font-size: 2rem;
  /* margin-bottom: 0.1rem; */
`;

const Twit = styled.i`
  font-size: 2.2rem;
  /* margin-bottom: 0.1rem; */
  color: #1DA1F2;
`;

export { Footer, Google, Git, Twit };
