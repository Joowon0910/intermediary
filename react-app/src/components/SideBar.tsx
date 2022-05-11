
import "../css/SideBar.css";
import SideBarMenuItem from "./SideBarMenuItem";

//import MyPageMenuItem from './SideBarMyPageMenuItem';
export default function SideBar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        {/* <MyPageMenuItem/> */}
        <SideBarMenuItem/>
      </div>
    </div>
  );
}
