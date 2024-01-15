import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login_and_signin/login";
import MyPag from "./pages/mapages/MyPage";
import NotFound from "./pages/NotFound";
import TravelPlandes from "./pages/travelplan/travelplandestination";
import TravelPlandate from "./pages/travelplan/travelplandate";
import Searchdiary from "./pages/searchdiarypage/searchdiarypage";
import Searchplace from "./pages/searchplacepage/searchplace";
import SearchPlaceInfo from "./pages/searchplacepage/placeinfo";
import MainHeader from "./components/MainHeader";
import Joinmembership from "./pages/login_and_signin/signup";
import Myprofile from "./pages/login_and_signin/Myprofile";
import Plandetail from "./pages/travelplan/travelplan_detail";
import Myplanpage from "./pages/mapages/Myplanpage";
import Otherplanpage from "./pages/mapages/Otherplanpage";
import Myplacepage from "./pages/mapages/Myplacepage";


function App() {
  return (
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
          <Route path="/searchplace" element={<Searchplace />} />
          <Route path="/placeinfo1" element={<SearchPlaceInfo />} />
          <Route path="/travelplandetail" element={<Plandetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/myplan" element={<Myplanpage/>}/>
          <Route path="/otherplan" element={<Otherplanpage/>}/>
          <Route path="/myplace" element={<Myplacepage/>}/>
        </Routes>
      </main>
    </div>
  );
}
export default App;
