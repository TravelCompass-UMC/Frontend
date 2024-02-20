//Homedata.js
// 숙소 = 1
// 명소 = 2
// 식당/카페 = 3

import LotteWorld from "../assets/images/장소/1 서울/명소/롯데월드 어드벤처.jpeg";
import Mongtan from "../assets/images/장소/1 서울/식당/몽탄.jpeg";
import RainReport from "../assets/images/장소/1 서울/카페/레인리포트.jpeg";
 
import Gwangalli from "../assets/images/장소/2 부산/명소/광안리해수욕장.jpeg";
import GGangttong from "../assets/images/장소/2 부산/식당/부평깡통시장.jpeg";
import Pizza from "../assets/images/장소/2 부산/식당/이재모피자.jpeg";

import Dongbaek from "../assets/images/장소/3 제주/명소/동백포레스트.jpeg";
import JaraeMarket from "../assets/images/장소/3 제주/식당/동문재래시장.jpeg";
import CafeOkssu from "../assets/images/장소/3 제주/카페/골목카페옥수.jpeg";

import Odongdo from "../assets/images/장소/4 여수/명소/오동도.jpeg";
import Jungwoo from "../assets/images/장소/4 여수/식당/정우굴구이.jpeg";
import GodButter from "../assets/images/장소/4 여수/카페/갓버터도나스.jpeg";




let homeplaces = [
    // 데이터를 별도의 객체와 분리
    {
        id: 1,
        place: "롯데월드",
        info: "명소",
        where: "서울 송파구 올림픽로 240",
        liked: 1,
        category: 2,
        bookmark: 49873,
        star: 4.47,
        img : LotteWorld,
    },
    {
        id: 2,
        place: "몽탄",
        info: "식당",
        where: "서울 용산구 백범로99길 50",
        liked: 1,
        category: 3,
        bookmark: 5354,
        star: 4.46,
        img: Mongtan,

    },
    {
        id: 3,
        place: "레인리포트",
        info: "카페",
        where: "서울 용산구 소월로40길85",
        liked: 1,
        category: 3,
        bookmark: 316,
        star: 4.44,
        img: RainReport,

    },
    {
        id: 4, 
        place: "광안리해수욕장",
        info: "명소",
        where: "부산 수영구 광안해변로 219",
        liked: 1,
        category: 2,
        bookmark: 1380,
        star: 4.34,
        img: Gwangalli,
    },
    {
        id: 5, 
        place: "부평깡통시장",
        info: "식당",
        where: "부산 중구 부평1길 48",
        liked: 1,
        category: 3,
        bookmark: 301,
        star: 4.26,
        img: GGangttong,

    },
    {
        id: 6, 
        place: "이재모피자",
        info: "카페",
        where: "부산 부산진구 전포대로210번길48",
        liked: 1,
        category: 3,
        bookmark: 820,
        star: 4.64,
        img: Pizza,

    },
    {
        id: 7,
        place: "동백포레스트",
        info: "명소",
        where: "제주 서귀포시 남원읍 생기악로 53-38",
        liked: 1,
        category: 2,
        bookmark: 3915,
        star: 4.35,
        img: Dongbaek,
    },
    {
        id: 8,
        place: "동문재래시장",
        info: "식당",
        where: "제주 제주시 관덕로14길 20",
        liked: 1,
        category: 3,
        bookmark: 322,
        star: 4.35,
        img: JaraeMarket,
    },
    {
        id: 9,
        place: "골목카페옥수",
        info: "카페",
        where: "서울 용산구 소월로40길85",
        liked: 1,
        category: 3,
        bookmark: 316,
        star: 4.44,
        img: CafeOkssu,
    },
    {
        id: 10,
        place: "오동도",
        info: "명소",
        where: "전남 여수시 수정동 산1-11",
        bookmark: 19861,
        liked: 1,
        category: 2,
        star: 4.37,
        img: Odongdo,
    },
    {
        id: 11,
        place: "정우굴구이",
        info: "식당",
        where: "전남 여수시 돌산읍 안굴전길 57",
        liked: 1,
        category: 3,
        bookmark: 479,
        star: 4.41,
        img: Jungwoo,
    },
    {
        id: 12,
        place: "갓버터도나스",
        info: "카페",
        where: "전남 여수시 통제영5길 10-1 1층",
        liked: 1,
        category: 3,
        bookmark: 4244,
        star: 4.0,
        img: GodButter,
        
    },

];

export default homeplaces;