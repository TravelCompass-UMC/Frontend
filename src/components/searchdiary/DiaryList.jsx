import React from "react";
import { Link } from "react-router-dom";
import Diary from "./Diary";

const contents = [
  //데이터를 별도의 객체와 분리
  {
    place: "제주도",
    hashtag: "가족 여행",
  },
  {
    place: "울릉도",
    hashtag: "추억 여행",
  },
];

function DiaryList(props) {
  return (
    <div>
      {contents.map((place) => {
        return <Diary place={contents.place} hashtag={contents.hashtag} />;
      })}
    </div>
  );
}

// function CommentList(props) {
//     return (
//         <div>
//                 <Comment name={"이인제"} comment={"안녕하세요, 소품입니다."}/>
//         </div>
//     );
// }

export default DiaryList;
