import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import google from "assets/images/google.png";
import * as S from './LoginFooter.style';

function LoginFooter({ authService }) {
  const history = useHistory();
  // 로그아웃 페이지 전환
  const goToLogin = (userId) => {
    history.push({
      pathname: '/',
      state: { id: userId },
    });
  };

  // 로그인 페이지로 전환
  const routeChange = () => {
    let path = '/';
    history.push(path);
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToLogin(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToLogin(user.uid);
    });
  });

  return (
    <>
      <S.Footer>
        <ul>
          {/* Google login button */}
          <li>
            <button onClick={onLogin}>
              <span>
                <S.Google src={google} alt="구글"></S.Google>
              </span>
              <span>Google</span>
            </button>
          </li>
          {/* Github login button*/}
          <li>
            <button onClick={onLogin}>
              <span>
                <S.Git className="fab fa-github"></S.Git>
              </span>
              <span>Github</span>
            </button>
          </li>
          {/* Twitter login button */}
          <li>
            <button onClick={onLogin}>
              <span>
                <S.Twit className="fab fa-twitter"></S.Twit>
              </span>
              <span>Twitter</span>
            </button>
          </li>
        </ul>
        {/* Home return button */}
        <button className="closeBtn" onClick={routeChange}>
          <i className="fas fa-times-circle"></i>
        </button>
      </S.Footer>
    </>
  );
}

export default LoginFooter;
