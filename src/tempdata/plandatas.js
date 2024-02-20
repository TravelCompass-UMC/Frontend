import SeoulImage from "../assets/images/CityPictures/Seoul.jpg";
import BusanImage from "../assets/images/CityPictures/Busan.jpg";
import GyeonjuImage from "../assets/images/CityPictures/Gyeongju.jpg";
import JejuImage from "../assets/images/CityPictures/Jeju.jpg";
import YeosuImage from "../assets/images/CityPictures/Yeosu.jpg";
import SokchoImage from "../assets/images/CityPictures/Sokcho.jpg";

let allplans = [
  // 내가 저장한 관심있는 여행계획서
  {
    id: 1,
    place: "다현의 제주도 탐방기",
    hashtag: ["가족 여행"],
    liked: 0, //내가 좋아요 눌렀는지
    img: SeoulImage,
    location: "제주도",
    recom: 2,
    look: 3,
    likes: 10,
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
    place: "상현의 비빔밥 먹방 여행기",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 0, //내가 좋아요 눌렀는지
    img: BusanImage,
    location: "전라도",
    recom: 3,
    look: 1,
    likes: 13,
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
    id: 3,
    place: "제주도 카페 탐방",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 4,
    place: "유적지 탐방",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: GyeonjuImage,
  },
  {
    id: 5,
    place: "속초 맛집 투어",
    hashtag: ["가족 여행"],
    liked: 0,
    img: SokchoImage,
  },
  {
    id: 6,
    place: "게장 먹방기",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: YeosuImage,
  },
  {
    id: 7,
    place: "돌하르방과 함꼐한 여행",
    hashtag: ["가족 여행"],
    liked: 0,
    img: JejuImage,
  },
  {
    id: 8,
    place: "부산 여행",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: BusanImage,
  },
  {
    id: 9,
    place: "반갑수광",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 10,
    place: "광안리 맛집 투어",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: BusanImage,
  },
  {
    id: 11,
    place: "제주기행",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 12,
    place: "갈매기와 함께한 하루",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: BusanImage,
  },
  {
    id: 13,
    place: "유적지 탐방",
    hashtag: ["가족 여행"],
    liked: 1,
    img: GyeonjuImage,
  },
  {
    id: 14,
    place: "여수밤바다",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: YeosuImage,
  },
  {
    id: 15,
    place: "속초",
    hashtag: ["가족 여행"],
    liked: 1,
    img: SokchoImage,
  },
  {
    id: 16,
    place: "상현이의 여행",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: SokchoImage,
  },
  {
    id: 17,
    place: "찬영이의 여행",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 18,
    place: "부산으로 떠난 우정여행",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
    img: BusanImage,
  },
  {
    id: 19,
    place: "제주도7",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 20,
    place: "울릉도8",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
  },
  {
    id: 21,
    place: "제주도9",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 22,
    place: "울릉도10",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
  },
  {
    id: 2,
    place: "제주도11",
    hashtag: ["가족 여행"],
    liked: 1,
    img: JejuImage,
  },
  {
    id: 24,
    place: "울릉도12",
    hashtag: ["추억 여행", "가족 여행"],
    liked: 1,
  },
  // 추가적인 데이터는 여기에 계속 추가
];

export default allplans;
