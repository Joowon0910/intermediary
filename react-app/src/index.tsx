import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./router/Index";
import Notice from "./router/Notice";
import Mypage from "./router/Mypage";
import ModifyAccountInfo from "./router/ModifyAccountInfo";
import Scheduler from "./router/Scheduler";
import BoardList from "./router/BoardList";
import Board from "./router/Board";
import ContentSummary from "./router/ContentSummary";
import CollaboSuggest from "./router/CollaboSuggest";
import ContentConfirm from "./router/ContentConfirm";
import SelfIntroduction from "./router/SelfIntroduction";
import Login from "./router/Login";
import Register from "./router/Register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="index" element={<Index />} />
        <Route path="notice" element={<Notice />}>
          <Route path="list" element={<BoardList page={"notice"} boardTitle={"notice"}/>} />
          <Route path="board/:page/:title" element={<Board/>} />
        </Route>
        <Route path="content_summary" element={<ContentSummary />}>
          <Route path="list" element={<BoardList page={"content_summary"} boardTitle={"content_summary"}/>} />
          <Route path="board/:page/:title" element={<Board />} />
        </Route>
        <Route path="collabo_suggest" element={<CollaboSuggest />}>
          <Route path="list" element={<BoardList page={"collabo_suggest"} boardTitle={"collabo_suggest"}/>} />
          <Route path="board/:page/:title" element={<Board/>} />
        </Route>
        <Route path="content_confirm" element={<ContentConfirm />}>
          <Route path="list" element={<BoardList page={"content_confirm"} boardTitle={"content_confirm"}/>} />
          <Route path="board/:page/:title" element={<Board/>} />
        </Route>
        <Route path="self_introduction" element={<SelfIntroduction />}>
          <Route path="list" element={<BoardList page={"self_introduction"} boardTitle={"self_introduction"}/>} />
          <Route path="board/:page/:title" element={<Board/>} />
        </Route>
        <Route path="mypage" element={<Mypage />}>
          <Route
            path="modify-account-infomation"
            element={<ModifyAccountInfo />}
          />
          <Route path="scheduler" element={<Scheduler />} />
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
