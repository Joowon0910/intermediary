import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import "../css/login.css";
const SET_TOKEN = "SET_TOKEN";
const enum FormNumber {
  userID = 0,
  password = 1,
}
interface LoginForm {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data, event) => {
    handleLoginSubmit(event);
  };
  function clickHiddenLoginSubmitBtn() {
    const loginSubmitBtn = document.getElementById("login_submit");
    if (loginSubmitBtn) {
      loginSubmitBtn.click();
    }
  }
  async function handleLoginSubmit(e: React.BaseSyntheticEvent) {
    const formData = e.target.form;
    const LoginData: LoginForm = {
      username: (formData[FormNumber.userID] as HTMLInputElement).value,
      password: (formData[FormNumber.password] as HTMLInputElement).value,
    };
    await axios
      .post(
        "/auth/authenticate",
        LoginData

      )
      .then((Response) => {
          localStorage.setItem("jwt", Response.data.token);
          
      })
      .catch((Error) => {
        console.log(Error);
      });
    e.preventDefault();
    navigate("/mypage");
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
            className={`login_input ${errors.username && "login_validation"}`}
            type="text"
            placeholder="아이디를 입력해주세요."
            name="userID"
            {...register("username", { required: true })}
          />
          <br />
          <label htmlFor="password" className="login_input_label">
            비밀번호
          </label>
          <input
            id="password"
            className={`login_input ${errors.password && "login_validation"}`}
            type="password"
            // onChange={(event) => {
            //   console.log(event.target.value);
            // }}
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


export default Login;
