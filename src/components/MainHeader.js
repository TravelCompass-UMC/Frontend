import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="/" className={classes.logo}>
          Travel Compass
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/searchplace">
              장소 검색
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/searchdiary">
              다른 사람의 여행일지
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/travelplan">
              여행계획 설계
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/mypage">
              마이페이지
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              로그인
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
