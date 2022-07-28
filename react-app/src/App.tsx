import React, { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./redux/IndexkeyStore";
import Authenticate from "./functions/Authenticate";
import DeniedAccess from "./components/DeniedAccess";
const windowLocationOrigin: string = window.location.origin;
const windowLocationPathaname: string = window.location.pathname;

function App() {
  const [chkAuth, setChkAuth] = useState(false);
  useEffect(() => {
    Authenticate.checkAuthFromApp().then((value) => {
      if (value.data === "pass") setChkAuth(true);
    });
  }, []);
  
  if (windowLocationPathaname === "/")
    window.location.replace(
      `${windowLocationOrigin}${windowLocationPathaname}login`
    );

  return (
    <Provider store={store}>
      {!chkAuth ? (
        <DeniedAccess/>
      ) : (
        <>
          <Header />
          <SideBar />
          <div className="content_frame">
            <Outlet />
          </div>
        </>
      )}
    </Provider>
  );
}

export default App;
