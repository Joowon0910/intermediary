import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mypage from "./router/Mypage";
import BoardList from "./router/BoardList";
import Board from "./router/Board";

import Login from "./router/Login";
import Register from "./router/Register";
import ContentEdit from "./router/ContentEdit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="edit" element={<ContentEdit />}></Route>
        <Route path="list/:page/:boardTitle" element={<BoardList />} />
        <Route path="board/:page" element={<Board />} />

        <Route path="mypage" element={<Mypage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
