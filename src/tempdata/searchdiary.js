//searchdiary.js
const contents = [
  {
    id: 1,
    place: "다현의 제주도 여행계획",
    hashtag: ["가족 여행", "추억 여행"],
    location: "제주도",
    recom: 2,
    look: 3,
    likes: 10,
    liked: 1, //내가 좋아요 눌렀는지
    itinerary: [
      { day: 1, activities: ["아침 해안도로", "제주 돌마을", "맛집"] },
      {
        day: 2,
        activities: ["성산일출봉", "제주 벽화마을", "우도", "헤녀의 집 방문"],
      },
      { day: 3, activities: ["헬로키티 아일랜드", "점심", "한라산", "저녁"] },
    ],
  },
  {
    id: 2,
    place: "찬영의 제주도 여행계획",
    hashtag: ["가족 여행", "행복 여행"],
    location: "전라도",
    recom: 3,
    look: 1,
    likes: 13,
    liked: 1, //내가 좋아요 눌렀는지
    itinerary: [
      { day: 1, activities: ["아침 해안도로", "제주 돌마을", "맛집"] },
      {
        day: 2,
        activities: ["성산일출봉", "제주 벽화마을", "우도", "헤녀의 집 방문"],
      },
      { day: 3, activities: ["헬로키티 아일랜드", "점심", "한라산", "저녁"] },
    ],
  },
  { id: 3, place: "제주도3", hashtag: ["가족 여행"] },
  { id: 4, place: "울릉도4", hashtag: ["추억 여행", "가족 여행"] },
];

export default contents;
