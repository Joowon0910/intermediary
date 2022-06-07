import "../css/register.css";
export default function Register() {
  return (
    <div className="register-form">
      <div className="register-form-title">Register</div>
      <div className="register-form-wrapper">
        <label htmlFor="ID" className="register-label">
          아이디
        </label>
        <input id="ID" type="text" className="register-input" placeholder="ID"/>
        <br />
        <label htmlFor="password" className="register-label">
          비밀번호
        </label>
        <input id="password" type="password" className="register-input" placeholder="Password"/>
        <br />
        <label htmlFor="confirmPassword" className="register-label">
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="register-input"
          placeholder="Password Confirm"
        />
        <br />
        <label htmlFor="email" className="register-label">
          이메일
        </label>
        <input id="email" type="email" className="register-input" placeholder="E-mail"/>
        <br />
        <label htmlFor="selectPlatform" className="register-label">
          활동 플랫폼
        </label>
        <input
          id="selectPlatformTwitch"
          name="platform"
          type="radio"
          className="register-input radio-btn"
        />
        <label htmlFor="selectPlatformTwitch">twitch</label>
        <input
          id="selectPlatformYoutube"
          name="platform"
          type="radio"
          className="register-input radio-btn"
        />
        <label htmlFor="selectPlatformYoutube">youtube</label>
        <br />
        <label htmlFor="platformNickname" className="register-label">
          플랫폼 닉네임
        </label>
        <input id="platformNickname" type="text" className="register-input" placeholder="Platform Nickname"/>
        <br />
        <div className="register-btn-frame">
          <div className="btn">submit</div>
          <div className="btn">back to home</div>
        </div>
      </div>
    </div>
  );
}
