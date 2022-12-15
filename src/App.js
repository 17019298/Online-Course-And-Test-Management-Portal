import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./styles/LoginPage/loginPage.css";

import Login from "./pages/login";
import StudentSignup from "./pages/student-signup";
import LecturerSignup from "./pages/lecturer-signup";
import Home from './pages/home';
import CourseContent from "./pages/course-content";
import Review from "./components/review"
import CourseDetails from "./pages/courseDetails"
import GiveTest from "./pages/give-test";
import MyAccount from "./pages/myAccount";
import Subscription from "./pages/subscription";
import SubscriptionDetail from "./pages/subscription-detail";
import BuyPlan from "./pages/BuyPlan";
import StudentCourse from "./pages/my-courses";
import LecturerCourse from "./pages/lecturer-courses";
import AddCourse from "./pages/add-course";
import RemoveLecturer from "./pages/removelecturer";
import Test from "./pages/add-test";
import SelectCourse from "./pages/selectCourse";
import AddVideo from "./pages/add-video";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studentsignup" element={<StudentSignup />} />
          <Route path="/lecturersignup" element={<LecturerSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course-detail" element={<CourseDetails />} />
          <Route path="/coursecontent" element={<CourseContent/>} />
          <Route path="/review" element={<Review/>}/>
          <Route path="/give-test" element={<GiveTest/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/subscription-detail" element={<SubscriptionDetail/>}/>
          <Route path="/buy-plan" element={<BuyPlan/>}/>
          <Route path="/enroll-courses" element={<StudentCourse/>}/>
          <Route path="/my-courses" element={<LecturerCourse/>}/>
          <Route path="/add-course" element={<AddCourse/>}/>
          <Route path="/remove-lecturer" element={<RemoveLecturer/>}/>
          <Route path="/add-test" element={<Test/>}/>
          <Route path="/select-course" element={<SelectCourse/>}/>
          <Route path="/add-video" element={<AddVideo/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
