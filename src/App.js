import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login_and_signin/login";
import MyPag from "./pages/mapages/MyPage";
import NotFound from "./pages/NotFound";

import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPag />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
