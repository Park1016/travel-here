import * as S from './LoginHeader.style';
import NavLinks from 'components/NavLinks/NavLinks';
import LoginFooter from 'components/LoginModal/footer/LoginFooter';
import AuthService from 'auth_service';

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
  } = props;

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
                      <button onClick={toggleClass} className="btn">
                        Log in
                      </button>
                    </S.Box>
                  </div>
                </div>
                <div className="info-item">
                  <div className="table">
                    <S.Box>
                      <p>Don't have an account?</p>
                      <button onClick={toggleClass} className="btn">
                        Sign up
                      </button>
                    </S.Box>
                  </div>
                </div>
              </section>

              <section className="container-form">
                <div className="form-item log-in">
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
                      <S.Error1 className="errorMsg">{emailError}</S.Error1>
                      <input
                        className="inputPw"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <S.Error2 className="errorMsg">{passwordError}</S.Error2>
                      <S.Btn onClick={handleLogin} className="btn" email={emailError} pw={passwordError}>
                        Log in
                      </S.Btn><br />
                      {passwordError && <button className="findPassword" onClick={goToPassword}>
                        비밀번호 재설정
                      </button>}
                    </div>
                  </div>
                </div>

                <div className="form-item sign-up">
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
                      <S.Error1 className="errorMsg">{emailError}</S.Error1>
                      <input
                        className="inputPw"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <S.Error2 className="errorMsg">{passwordError}</S.Error2>
                      <S.Btn onClick={handleSignUP} className="btn">
                        Sign up
                      </S.Btn>
                    </div>
                  </div>
                </div>
                <LoginFooter authService={authService} />
              </section>
            </article>
          </main>
        </S.Header>
      )}
    </>
  );
}

export default LoginHeader;
