import { Link } from "react-router-dom";
import "../css/DeniedAccess.css";
export default function DeniedAccess() {
  return (
    <div className="DeniedAccess_wrapper">
      <div className="DeniedAccess_title">로그인이 필요합니다</div>
      <Link to={`/login`} className="DeniedAccess_btn">
        로그인
      </Link>
    </div>
  );
}
