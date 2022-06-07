import { Link } from "react-router-dom";
import "../css/Header.css";
export default function Header() {
  return (
    <div className="content_wrap horizon_wrap">
      <img
        src={require("../images/VideoGameController.png")}
        alt={require("../images/VideoGameController.png")}
        className=" left_located icon"
      />
      <img
        src={require("../images/CheckMark.png")}
        alt={require("../images/CheckMark.png")}
        className=" left_located icon"
      />
      <div className="content left_located">닉네임</div>
      <Link to="login"  style={{ textDecoration: 'none' }}><div className="content right_side button">로그아웃</div></Link>
      <Link to="mypage"  style={{ textDecoration: 'none' }}><div className="content right_side button">마이페이지</div></Link>
    </div>
  );
}
