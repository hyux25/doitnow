import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from "Router/Login/Index";
import Room from "Router/Room/Room";
import Main from "Router/Main/Main";
import ForgotPassword from "Router/ForgotPassword/ForgotPassword";
import Signup from "Router/Signup/Signup";
import Schoolchoosing from "Router/Schoolchoosing/Index";
import Schoolsearching from "Router/Schoolsearching/Index";
import Joining from "Router/Joining/Index";
import Mypage from "Router/Mypage/Index";
import Findschool from "Router/Findschool/Index";
import Createclass from "Router/Createclass/Index";
import Schoolchoosingseoul from "Router/Schoolchoosingseoul/Schoolchoosingseoul";
import Detailchoosing from "Router/Detailchoosing/Index";
import Workmaking from "Router/Workmaking/Index";
import Viewclass from "Router/Viewclass/Index";
import Detailclass from "Router/Detailclass/Index";
import Notiyesoryes from "Router/Notiyesoryes/Index";
import "components/Header/Header.css";
import Creatework from "Router/Creatework/Index";
import Writingwork from "Router/Writingwork/Index";
import Createclassinfo from "Router/Createclassinfo/Index";
import Uploadassignment from "Router/Uploadassignment/Index";
import Pagelink from "Router/Pagelink/Index";
import Viewassignment from "Router/Viewassignment/Index";
import Sharedclass from "Router/Sharedclass/Index";
import Createpost from "Router/Createpost/Index";
import Classpage from "Router/Classpage/Index";
import Comment from "Router/Comment/Index";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/schoolsearching" element={<Schoolsearching />} />
            <Route path="/schoolchoosing" element={<Schoolchoosing />} />
            <Route path="/joining" element={<Joining />} />
            <Route path="/findschool" element={<Findschool />} />
            <Route path="/my" element={<Mypage />} />
            <Route path="/detailchoosing" element={<Detailchoosing />} />
            <Route
              path="/schoolchoosingseoul"
              element={<Schoolchoosingseoul />}
            />
            <Route path="/createclass" element={<Createclass />} />
            <Route path="/workmaking" element={<Workmaking />} />
            <Route path="/viewclass" element={<Viewclass />} />
            <Route path="/detailclass" element={<Detailclass />} />
            <Route path="/notiyesoryes" element={<Notiyesoryes />} />
            <Route path="/creatework" element={<Creatework />} />
            <Route path="/writingwork" element={<Writingwork />} />
            <Route path="/Uploadassignment" element={<Uploadassignment />} />
            <Route path="/createclassinfo" element={<Createclassinfo />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/pagelink" element={<Pagelink />} />
            <Route path="/sharedclass" element={<Sharedclass />} />
            <Route path="/createpost" element={<Createpost />} />
            <Route path="/classpage" element={<Classpage />} />
          </>
        )}
        <Route
          path="/room/:roomId"
          element={<Room isLoggedIn={isLoggedIn} />}
        />
        <Route path="/viewassignment" element={<Viewassignment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
