import { NavLink, Link } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";
import ResponsiveAppBar from '../components/Navbars';

const MainHeader = () => {
  return (
    <ResponsiveAppBar>
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link activeClassName={classes.active} to="/">
              홈으로 가기(로고 클릭으로 이동)
            </Link>
          </li>
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
          <li>
            <NavLink activeClassName={classes.active} to="/searchdiary">
              다른 사람의 여행일지 보기
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/searchplace">
              장소 검색하기
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/travelplan">
              나의 여행계획 세우기
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </ResponsiveAppBar>
  );
};

export default MainHeader;
