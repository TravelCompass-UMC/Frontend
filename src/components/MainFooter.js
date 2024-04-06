import { EndSection } from "../pages/mapages/MyPage";
import React from 'react';


export function EndSection() {
  return (
    <div className="end-box">
      <img src={EndImage} alt="EndImage" className="endimage" />
    </div>
  );
}

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <EndSection /> {/* EndSection 컴포넌트 재사용 */}
    </footer>
  );
};

export default MainFooter;