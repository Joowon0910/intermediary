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

      <div className="content left_located">등급</div>
      <div className="content right_side">마이페이지</div>
      <div className="content right_located">회원가입</div>
      <div className="content right_located">로그인</div>
    </div>
  );
}
