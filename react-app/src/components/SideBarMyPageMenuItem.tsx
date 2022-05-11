import '../css/SideBarMyPageMenuItem.css';
import Mail from "./Mail";
export default function MyPageMenuItem() {
  return (
    <div>
      <div className="my-page-menu-item">개인정보 수정</div>
      <div className="my-page-menu-item">방송 시간표</div>
      <Mail/>
    </div>
  );
}
