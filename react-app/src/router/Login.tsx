import "../css/login.css";
export default function Login() {
  return (
    <div className="login-form">
      Login
      <div className="login-form-wrapper">
        <label htmlFor="ID" className="input-label">
          아이디
        </label>
        <input
          id="ID"
          className="input-form"
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="ID"
        />
        <br />
        <label htmlFor="password" className="input-label">
          비밀번호
        </label>
        <input
          id="password"
          className="input-form"
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="password"
        />
        <br />
        <div className="input-button">로그인</div>
        <div className="input-button">회원가입</div>
      </div>
    </div>
  );
}
