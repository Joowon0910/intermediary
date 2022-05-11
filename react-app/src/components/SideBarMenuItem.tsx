import { Link } from 'react-router-dom';
import '../css/SideBarMenuItem.css';

export default function SideBarMenuItem() {
  return (
    <div>
      <Link to="./Notice"><div className="menu-item">공지사항</div></Link>
      <div className="menu-item">방송 컨텐츠 정리</div>
      <div className="menu-item">콜라보 제의</div>
      <div className="menu-item">방송 컨텐츠 정리</div>
      <div className="menu-item">자기 소개</div>
    </div>
  );
}
