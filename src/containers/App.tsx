import React from "react";
import logo from "../assets/logo.svg";
import { Friend, FriendType } from "../modules/common-ui/Friend";
import { Menu } from "../modules/Layout";
import "./App.css";

export const App = () => {
  const friends: FriendType[] = [
    { firstName: "Jon", lastName: "Torel" },
    { firstName: "Arthur", lastName: "Robieux" },
    { firstName: "Alice", lastName: "Dupuy" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <div>
          {friends.map((f) => (
            <Friend friend={f} />
          ))}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
