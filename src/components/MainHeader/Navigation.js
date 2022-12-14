import React, { useContext, useState } from "react";
import AuthContext from "../store/Auth-context";
import Toggle from "../toggle/Toggle";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const { isLogin, onLogout, isDay, toggleDay } = useContext(AuthContext);

  // return (
  // <AuthContext.Consumer>
  {
    /* {({isLogin, onLogout}) => { */
  }
  return (
    <nav className={classes.nav}>
      <ul>
        {isLogin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLogin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLogin && (
          <li>
            <Toggle toggled={isDay} onClick={toggleDay} />
          </li>
        )}
        {isLogin && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // }}
  {
    /* </AuthContext.Consumer> */
  }
  // );
};

export default Navigation;
