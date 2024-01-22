// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import styles from "../../styles/Mypages.css";
// import Myplan from "./Myplan";  // Myplan 컴포넌트 import
// import Otherplan from "./Otherplan";  // Otherplan 컴포넌트 import
// import Myplace from "./Myplace";  // Myplace 컴포넌트 import

// class mypage extends Component {
//   render() {
//     return (
//       <div className="mypage-container">
//         <div className="user">
//           <div className="profile-info">
//             {/* 프로필 아이콘, 닉네임, 로그인 계정 이메일 표시 */}
//             {/* 이 부분은 나중에 로그인 여부에 따라 동적으로 변경할 예정 */}
//             <img src="path_to_profile_icon.jpg" alt="프로필 아이콘" />
//             <div className="user-details">
//               <p>닉네임: 홍길동</p>
//               <p>이메일: honggildong@example.com</p>
//             </div>
//           </div>
//         </div>
//         <div className="my-plans">
//           {/* 내가 저장한 여행 계획들 썸네일 표시 */}
//           {/* Myplan.js 컴포넌트를 여기서 렌더링 */}
//           <div className="myplan-container">
//             {/* 내 여행 계획 컴포넌트의 내용을 작성 */}
//             <div className="mypage_navbar">
//               <div>나의 여행계획</div>
//               <div style={{ flexGrow: "1" }}></div>
//               <div>
//                 <Link to="/myplan">
//                   더보기
//                 </Link>
//               </div>
//             </div>
//             <div className="myplan_img">썸네일 1</div>
//             <div className="myplan_img">썸네일 2</div>
//             <div className="myplan_img">썸네일 3</div>
//           </div>
//         </div>
//         <div className="interest-plans">
//           {/* 관심 있는 여행계획서 상위 3개만 가로로 나열 */}
//           {/* Otherplan.js 컴포넌트를 여기서 렌더링 */}
//           <div className="otherplan-container">
//             {/* 관심 있는 여행 계획서 컴포넌트의 내용을 작성 */}
//             <div className="mypage_navbar">
//               <div>관심있는 여행계획서</div>
//               <div style={{ flexGrow: "1" }}></div>
//               <div>
//                 <Link to="/otherplan">
//                   더보기
//                 </Link>
//               </div>
//             </div>
//             <div className="ohterplan_img">썸네일1</div>
//             <div className="ohterplan_img">썸네일2</div>
//             <div className="ohterplan_img">썸네일3</div>
//           </div>
//         </div>
//         <div className="interest-places">
//           {/* 관심있는 장소들 2행 3열 표시 */}
//           {/* Myplace.js 컴포넌트를 여기서 렌더링 */}
//           <div className="myplace-container">
//             {/* 관심 있는 장소 컴포넌트의 내용을 작성 */}
//             <div className="mypage_navbar">
//               <div>관심 있는 장소 </div>
//               <div style={{ flexGrow: "1" }}></div>
//               <div>
//                 <Link to="/myplace">
//                   더보기
//                 </Link>
//               </div>
//             </div>
//             <table>
//               <thead></thead>
//               <tbody>
//                 <tr>
//                   <td>내용</td>
//                   <td>내용</td>
//                   <td>내용</td>
//                 </tr>
//                 <tr>
//                   <td>내용</td>
//                   <td>내용</td>
//                   <td>내용</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="log-botton">
//             <button>로그아웃</button>
//             <button>회원탈퇴</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default mypage;


// Mypages.js

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import Myplan from "../../components/Mypage_components/Myplan";  // Myplan 컴포넌트 import
import Otherplan from "../../components/Mypage_components/Otherplan";  // Otherplan 컴포넌트 import
import Myplace from "../../components/Mypage_components/Myplace";  // Myplace 컴포넌트 import

class mypage extends Component {
  render() {
    return (
      <div className="mypage-container">
        <div className="user">
          <div className="profile-info">
            <img src="path_to_profile_icon.jpg" alt="프로필 아이콘" />
            <div className="user-details">
              <p>닉네임: 홍길동</p>
              <p>이메일: honggildong@example.com</p>
            </div>
          </div>
        </div>
        
        <div className="my-plans">
          <Myplan />
        </div>

        <div className="interest-plans">
          <Otherplan />
        </div>

        <div className="interest-places">
          <Myplace />
          <div className="log-botton">
            <button>로그아웃</button>
            <button>회원탈퇴</button>
          </div>
        </div>
      </div>
    );
  }
}

export default mypage;
