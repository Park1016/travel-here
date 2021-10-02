import * as S from './LoginHeader.style';
import NavLinks from 'components/NavLinks/NavLinks';
import LoginFooter from 'components/LoginModal/footer/LoginFooter';
import AuthService from 'auth_service';
import { useState, useRef } from 'react';

function LoginHeader(props) {
  const authService = new AuthService();
  const {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUP,
    hasAccount,
    emailError,
    passwordError,
    handleLogout,
    toggleClass,
    goToPassword,
    getUserProfile,
    clearErrors,
    clearInputs,
  } = props;

  const [log, setLog] = useState(true);
  const [sign, setSign] = useState(false);
  const [btn, setBtn] = useState(false);

  const loginForm = useRef();
  const signUpForm = useRef();

  const loginBtn = useRef();
  const signUpBtn = useRef();

  const onLog = () => {
    handleLogin();
  }

  const onSign = () => {
    handleSignUP();
    setBtn(true);
  }

  const onLoginForm = () => {
    if(log){
      return;
    }
    clearErrors();
    clearInputs();
    toggleClass();
    setLog(true);
    setSign(false);
    signUpForm.current.style.display = 'none';
    loginForm.current.style.display = 'block';
  }
  
  const onSignUpForm = () => {
    if(sign){
      return;
    }
    clearErrors();
    clearInputs();
    toggleClass();
    setSign(true);
    setLog(false);
    loginForm.current.style.display = 'none';
    signUpForm.current.style.display = 'block';
  }

  return (
    <>
      {user ? (
        <NavLinks handleLogout={handleLogout} />
      ) : (
        <S.Header>
          <main className={hasAccount ? 'container log-in' : 'container'}>
            <article className="box"></article>
            <article className="container-forms">
              <section className="container-info">
                <div className="info-item">
                  <div className="table">
                    <S.Box>
                      <p>Have an account?</p>
                      <S.BoxBtn1 ref={loginBtn} onClick={onLoginForm} className="btn" log={log}>
                        Log in
                      </S.BoxBtn1>
                    </S.Box>
                  </div>
                </div>
                <div className="info-item">
                  <div className="table">
                    <S.Box>
                      <p>Don't have an account?</p>
                      <S.BoxBtn2 ref={signUpBtn} onClick={onSignUpForm} className="btn" sign={sign}>
                        Sign up
                      </S.BoxBtn2>
                    </S.Box>
                  </div>
                </div>
              </section>

              <section className="container-form">
                <div ref={loginForm} className="form-item log-in">
                  <div className="table">
                    <div className="table-cell">
                      <input
                        className="inputEmail"
                        type="text"
                        autoFocus
                        required
                        value={email}
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {(emailError && log) && <S.Error1 className="errorMsg">{emailError}<div></div></S.Error1>}
                      <input
                        className="inputPw"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      {(passwordError && log) && <S.Error2 className="errorMsg">{passwordError}<div></div></S.Error2>}
                      <S.Btn onClick={onLog} className="btn" pw={passwordError}>
                        Log in
                      </S.Btn><br />
                      {passwordError && <button className="findPassword" onClick={goToPassword}>
                        비밀번호 재설정
                      </button>}
                    </div>
                  </div>
                </div>

                <div ref={signUpForm} className="form-item sign-up">
                  <div className="table">
                    <div className="table-cell">
                      <input
                        className="inputEmail"
                        type="text"
                        autoFocus
                        required
                        value={email}
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {(emailError && sign && btn) && <S.Error3 className="errorMsg">{emailError}<div></div></S.Error3>}
                      <input
                        className="inputPw"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      {(passwordError && sign && btn) && <S.Error4 className="errorMsg">{passwordError}<div></div></S.Error4>}
                      <S.Btn2 onClick={onSign} className="btn">
                        Sign up
                      </S.Btn2>
                    </div>
                  </div>
                </div>
                <LoginFooter authService={authService} btn={btn} setBtn={setBtn} log={log} sign={sign} />
              </section>
            </article>
          </main>
        </S.Header>
      )}
    </>
  );
}

export default LoginHeader;
