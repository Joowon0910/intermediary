import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import "../css/login.css";
const enum FormNumber {
  userID = 0,
  password = 1,
}
interface Password {
  userID: string;
  password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Password>();
  const onSubmit: SubmitHandler<Password> = (data, event) => {
    handleLoginSubmit(event);
  };
  function clickHiddenLoginSubmitBtn() {
    const loginSubmitBtn = document.getElementById("login_submit");
    if (loginSubmitBtn) {
      loginSubmitBtn.click();
    }
  }
  async function handleLoginSubmit(e: React.BaseSyntheticEvent) {
    console.log();
    const formData = e.target.form;
    const LoginData: Password = {
      userID: (formData[FormNumber.userID] as HTMLInputElement).value,
      password: (formData[FormNumber.password] as HTMLInputElement).value,
    };
localStorage.setItem('token', "token");
    await axios
      .post(
        "https//localhost:3000/jwt/login/test",
        {
          username: LoginData.userID,
          password: LoginData.password,
        },
        {
          headers: {
            "Content-type": "application/json",
            "Authorization":`Bearer `
          },
        }
      )
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
    e.preventDefault();
  }
  return (
    <div className="login_frame">
      Login
      <div className="login_form_wrapper">
        <form className="login_form">
          <label htmlFor="ID" className="login_input_label">
            아이디
          </label>
          <input
            id="ID"
            className={`login_input ${errors.userID && "login_validation"}`}
            type="text"
            placeholder="아이디를 입력해주세요."
            name="userID"
            {...register("userID", { required: true })}
          />
          <br />
          <label htmlFor="password" className="login_input_label">
            비밀번호
          </label>
          <input
            id="password"
            className={`login_input ${errors.password && "login_validation"}`}
            type="password"
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="6~30자 이내로 입력해주세요"
            name="password"
            {...register("password", {
              required: true,
              maxLength: 30,
              minLength: 6,
            })}
          />
          <br />
          <button
            type="button"
            className="login_button"
            onClick={clickHiddenLoginSubmitBtn}
          >
            로그인
          </button>
          <input
            id="login_submit"
            type="submit"
            className="disable"
            onClick={handleSubmit(onSubmit)}
          />

          <Link to={`/register`} className="login_button">
            회원가입
          </Link>
        </form>
      </div>
    </div>
  );
}
