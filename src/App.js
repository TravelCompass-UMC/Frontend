import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./constants/fonts.css";

import Home from "./pages/Home/Home";
import Login from "./pages/login_and_signin/login";
import MyPag from "./pages/mapages/MyPage";
import NotFound from "./pages/NotFound";
import TravelPlandes from "./pages/travelplan/travelplandestination";
import TravelPlandate from "./pages/travelplan/travelplandate";
import Searchdiary from "./pages/searchdiarypage/searchdiarypage";
import DiaryContent from "./pages/searchdiarypage/diarycontent";
import Searchplace from "./pages/searchplacepage/searchplace";
import SearchPlaceInfo from "./pages/searchplacepage/placeinfo";
import PlaceInfoJeju from "./pages/searchplacepage/placeinfo1.js/placeinfo1_jeju";
import PlaceInfoSeoul from "./pages/searchplacepage/placeinfo1.js/placeinfo1_seoul";
import PlaceInfoBusan from "./pages/searchplacepage/placeinfo1.js/placeinfo1_busan";
import PlaceInfoYeosu from "./pages/searchplacepage/placeinfo1.js/placeinfo1_yeosu";
import PlaceInfoGyeongju from "./pages/searchplacepage/placeinfo1.js/placeinfo1_gyeongju";
import PlaceInfoSokcho from "./pages/searchplacepage/placeinfo1.js/placeinfo1_sokcho";
import PlaceInfoGangneung from "./pages/searchplacepage/placeinfo1.js/placeinfo1_gangneung";
import PlaceInfoYangyang from "./pages/searchplacepage/placeinfo1.js/placeinfo1_yangyang";
import PlaceDetail from "./components/PlaceDetail";
import MainHeader from "./components/MainHeader";
import Joinmembership from "./pages/login_and_signin/signup";
import Myprofile from "./pages/login_and_signin/Myprofile";
import Plandetail from "./pages/travelplan/travelplan_detail";
import PlanEdit from "./pages/planedit/travelplanEdit";
import Myplanpage from "./pages/mapages/Myplanpage";
import Myplacepage from "./pages/mapages/Myplacepage";
import Otherplanpage from "./pages/mapages/Otherplanpage";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPag />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/signup" element={<Joinmembership />} />
            <Route path="/travelplandes" element={<TravelPlandes />} />
            <Route path="/travelplandate" element={<TravelPlandate />} />
            <Route path="/searchdiary" element={<Searchdiary />} />
            <Route path="/diarycontent" element={<DiaryContent />} />
            <Route path="/searchplace" element={<Searchplace />} />
            <Route path="/placeinfo" element={<SearchPlaceInfo />} />
            <Route path="/placeinfo/:placeName" element={<PlaceDetail />} />
            <Route path="/placeinfo1_jeju" element={<PlaceInfoJeju />} />
            <Route path="/placeinfo1_seoul" element={<PlaceInfoSeoul />} />
            <Route path="/placeinfo1_busan" element={<PlaceInfoBusan />} />
            <Route path="/placeinfo1_yeosu" element={<PlaceInfoYeosu />} />
            <Route path="/placeinfo1_gyeongju" element={<PlaceInfoGyeongju />} />
            <Route path="/placeinfo1_sokcho" element={<PlaceInfoSokcho />} />
            <Route path="/placeinfo1_gangneung" element={<PlaceInfoGangneung />} />
            <Route path="/placeinfo1_yangyang" element={<PlaceInfoYangyang />} />
            <Route path="/travelplandetail" element={<Plandetail />} />
            <Route path="/travelplanedit" element={<PlanEdit />} />
            <Route path="/myplan" element={<Myplanpage />} />
            <Route path="/otherplan" element={<Otherplanpage />} />
            <Route path="/myplace" element={<Myplacepage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default App;
