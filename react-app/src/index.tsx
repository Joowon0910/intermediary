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
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="index" element={<Index />} />
        <Route path="notice" element={<Notice />} />
        <Route path="mypage" element={<Mypage />}>
          <Route
            path="modify-account-infomation"
            element={<ModifyAccountInfo />}
          />
          <Route path="scheduler" element={<Scheduler />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
