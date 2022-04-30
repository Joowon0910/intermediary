import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        {/* exact  */}
        {/* <Route path={`/${Statics_Name}`} element={<StaitcsRoute />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
