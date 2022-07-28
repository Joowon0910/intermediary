import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthPage from "../functions/Authenticate";
export default function Mypage() {
  const navigator = useNavigate();
  //   useEffect(() => {
  //   const checkAuthed = AuthPage("Mypage");
  //   if(!checkAuthed) {
  //       navigator('/login');
  //   }
  // }, []);

  return (
    <div>
      my page
      <Outlet />
    </div>
  );
}
