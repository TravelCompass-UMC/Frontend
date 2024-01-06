import { NavLink } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/mypage">
              마이페이지
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
