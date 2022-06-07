import React from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux';
import store from './redux/IndexkeyStore';

function App() {

  return (
    <Provider store={store}>
      <Header/>
      <SideBar/>
      {/* <nav>
        <Link to="/index"><span className="LinkInnerText">Index</span></Link> |{" "}
        <Link to="/notice"><span className="LinkInnerText">Notice</span></Link>
      </nav> */}
      <Outlet />
    </Provider>
  );
}

export default App;
