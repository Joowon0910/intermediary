import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./redux/IndexkeyStore";
const windowLocationOrigin: string = window.location.origin;
const windowLocationPathaname: string = window.location.pathname;
function App() {
  if (windowLocationPathaname === "/") 
    window.location.replace(`${windowLocationOrigin}${windowLocationPathaname}mypage`);
    return (
      <Provider store={store}>
        <Header />
        <SideBar />
        <div className="content_frame">
          <Outlet />
        </div>
      </Provider>
    );
}

export default App;
