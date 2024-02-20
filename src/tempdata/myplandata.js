//myplandata.js
import SeoulImage from '../assets/images/CityPictures/Seoul.jpg';
import BusanImage from '../assets/images/CityPictures/Busan.jpg';
import GyeonjuImage from '../assets/images/CityPictures/Gyeongju.jpg';
import JejuImage from '../assets/images/CityPictures/Jeju.jpg';
import YeosuImage from '../assets/images/CityPictures/Yeosu.jpg';
import SokchoImage from '../assets/images/CityPictures/Sokcho.jpg';
import { ScoreOutlined } from '@material-ui/icons';

let myplans = [
    //데이터를 별도의 객체와 분리
    {
      id:1,
      place: "속초",
      hashtag: ["가족 여행"],
      liked: 1,
      img: SokchoImage,
      left: 11,
    },
    {
      id:2,
      place: "경주",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: GyeonjuImage,
      left: 23,
    },
    {
      id:3,
      place: "여수",
      hashtag: ["가족 여행"],
      liked: 1,
      img: YeosuImage,
      left: 5,
    },
    {
      id:4,
      place: "부산",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: BusanImage,
      left: 213,
    },
    {
      id:5,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 21,
    },
    {
      id:6,
      place: "속초",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: SokchoImage,
      left: 11,
    },
    {
      id:7,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 23,
    },
    {
      id:8,
      place: "부산",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: BusanImage,
      left: 9,
    },
    {
      id:9,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 100,
    },
    {
      id:10,
      place: "여수",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img:YeosuImage,
      left: 22,
    },
    {
      id:11,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 10,
    },
    {
      id:12,
      place: "속초",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: SokchoImage,
      left: 13,
    },
    {
      id:13,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 11,
    },
    {
      id:14,
      place: "경주",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: GyeonjuImage,
      left: 10,
    },
    {
      id:15,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 5,
    },
    {
      id:16,
      place: "경주",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: GyeonjuImage,
      left: 6,
    },
    {
      id:17,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 22,
    },
    {
      id:18,
      place: "여수",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: YeosuImage,
      left: 21,
    },
    {
      id:19,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 15,
    },
    {
      id:20,
      place: "서울",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img :SeoulImage,
      left: 10,
    },
    {
      id:21,
      place: "속초",
      hashtag: ["가족 여행"],
      liked: 1,
      img: SokchoImage
    },
    {
      id:22,
      place: "여수",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img:YeosuImage,
      left: 8,
    },
    {
      id:23,
      place: "제주도",
      hashtag: ["가족 여행"],
      liked: 1,
      img: JejuImage,
      left: 6,
    },
    {
      id:24,
      place: "부산",
      hashtag: ["추억 여행", "가족 여행"],
      liked: 1,
      img: BusanImage,
      left: 7,
    },
    //추가적인 데이터는 여기에 계속 추가
  ];
  
export default myplans;