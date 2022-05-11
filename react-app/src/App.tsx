import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {

  return (
    <div>
      <Header/>
      <SideBar/>
      {/* <nav>
        <Link to="/index"><span className="LinkInnerText">Index</span></Link> |{" "}
        <Link to="/notice"><span className="LinkInnerText">Notice</span></Link>
      </nav> */}
      <Outlet />
    </div>
  );
}

export default App;
