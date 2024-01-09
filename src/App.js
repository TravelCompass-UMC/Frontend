import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login_and_signin/login";
import MyPag from "./pages/mapages/MyPage";
import NotFound from "./pages/NotFound";
import TravelPlan from "./pages/travelplan/travelplanpage";
import Searchdiary from "./pages/searchdiarypage/searchdiarypage";
import Searchplace from "./pages/searchplacepage/searchplace";
import MainHeader from "./components/MainHeader";
import Joinmembership from "./pages/login_and_signin/signup";
import Myprofile from "./pages/login_and_signin/Myprofile"
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPag />} />
          <Route path="/myprofile" element={<Myprofile/>}/>
          <Route path="/signup" element={<Joinmembership/>}/>
          <Route path="/travelplan" element={<TravelPlan />} />
          <Route path="/searchdiary" element={<Searchdiary />} />
          <Route path="/searchplace" element={<Searchplace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
