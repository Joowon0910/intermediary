import { Link } from "react-router-dom";
import { useState } from "react";

import "../css/register.css";
import { SubmitHandler, useForm } from "react-hook-form";

const enum FormNumber {
  username = 0,
  password = 1,
  email = 3,
  platform = 4,
  nickname = 5,
}
interface User {
  username: String;
  password: String;
  confirmPassword?: String;
  email: String;
  platform: String;
  nickname: String;
}

export default function Register() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [pwd, setPwd] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data, event) => {
    handleRegisterSubmit(event);
  };
  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e); 
    setSelectedPlatform(e.target.value);
  };
  function clickHiddenRegisterSubmitBtn(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const submitBtn = document.getElementById("Register_submit");
    if (submitBtn) {
      submitBtn.click();
    }
  }
  async function handleRegisterSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    const formData = e.target.form;
    const UserFormData: User = {
      username: (formData[FormNumber.username] as HTMLInputElement).value,
      password: (formData[FormNumber.password] as HTMLInputElement).value,
      email: (formData[FormNumber.email] as HTMLInputElement).value,
      platform: (formData[FormNumber.platform] as HTMLInputElement).value,
      nickname: (formData[FormNumber.nickname] as HTMLInputElement).value,
    };
    const response = await fetch("/users/signup", {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(UserFormData), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    const redirectURL: string = "";
    const originURL:string = "http://localhost:3000";
    response.text().then(response => window.location.replace("http://localhost:3000".concat('',response))); // JSON 응답을 네이티브 JavaScript 객체로 파싱
  }
  return (
    <div className="register-form">
      <div className="register-form-title">Register</div>
      <div className="register-form-wrapper">
        <form className="Register_form">
          <label htmlFor="userId" className="register-label">
            아이디
          </label>
          <input
            id="userId"
            className={`register-input ${
              errors.username && "register_validation"
            }`}
            placeholder="아이디를 입력해주세요."
            name="userID"
            {...register("username", { required: true })}
          />

          <br />
          <label htmlFor="password" className="register-label">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="6~30자 이내로 입력해주세요"
            className={`register-input ${
              errors.password && "register_validation"
            }`}
            name="password"
            {...register("password", {
              required: true,
              maxLength: 30,
              minLength: 6,
            })}
            onChange={(event) => setPwd(event.currentTarget.value)}
          />
          <br />
          <label htmlFor="confirmPassword" className="register-label">
            비밀번호 확인
          </label>
          <input
            id="confirmPassword"
            type="password"
            className={`register-input ${
              errors.confirmPassword && "register_validation"
            }`}
            placeholder="비밀번호를 한번 더 입력해주세요."
            {...register("confirmPassword", {
              validate: (value) => value === pwd,
            })}
          />
          <br />
          <label htmlFor="email" className="register-label">
            이메일
          </label>
          <input
            id="email"
            type="email"
            className={`register-input ${
              errors.email && "register_validation"
            }`}
            placeholder="ex) register@naver.com"
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />
          <label htmlFor="selectPlatform" className="register-label">
            활동 플랫폼
          </label>
          <select
            id="selectPlatform"
            className={`register_select ${
              errors.platform && "register_validation"
            }`}
            defaultValue= {selectedPlatform}
            name="platform"
            {...register("platform", {
              validate: (selectedPlatform) => selectedPlatform !== "",
            })}
            onChange={e=>handleSelect(e)}
          >
            <option value="" disabled hidden>
              선택해주세요
            </option>
            <option  value="Twitch">Twitch</option>
            <option  value="Youtube">Youtube</option>
          </select>
          <br />
          <label htmlFor="platformNickname" className="register-label">
            플랫폼 닉네임
          </label>
          <input
            id="platformNickname"
            type="text"
            className={`register-input ${
              errors.nickname && "register_validation"
            }`}
            placeholder={`${selectedPlatform} 닉네임을 입력해주세요.`}
            name="nickname"
            {...register("nickname", { required: true })}
          />
          <br />
          <div className="register-btn-frame">
            <button
              className="register_btn"
              type="button"
              onClick={(event) => clickHiddenRegisterSubmitBtn(event)}
            >
              계정 생성
            </button>
            <input
              id="Register_submit"
              type="submit"
              className="disable"
              // onClick={(e) => processRegisterSubmit(e)}
              onClick={handleSubmit(onSubmit)}
            />
            <Link
              to={"/login"}
              style={{ textDecoration: "none" }}
              onClick={() => {}}
            >
              <div className="register_btn">뒤로</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
