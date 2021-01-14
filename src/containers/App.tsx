import React from "react";
import logo from "../assets/logo.svg";
import { Menu } from "../modules/Layout";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
