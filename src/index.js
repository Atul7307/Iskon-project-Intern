import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Founder from "./Pages/Founder/Founder";
import Philosophy from "./Pages/Philosophy/Philosophy";
import Mission from "./Pages/Mission/Mission";
import MoreAbout from "./Pages/MoreAbout/MoreAbout";
import NityaSeva from "./Pages/NityaSeva/NityaSeva";

import Arti from "./Pages/Temple/Arti/Arti";
import SaturdaySatsang from "./Pages/Temple/SaturdaySatsang/SaturdaySatsang";
import SundayFeast from "./Pages/Temple/SundayFeast/SundayFeast";
import SriLanka from "./Pages/SriLanka/SriLanka";
import LifeMembership from "./Pages/LifeTimeMembership/lifeMembershipPage";
import GauSeva from "./Pages/GauSeva/GauSeva";
import BhaktiSastri from "./Pages/OurProgram/BhaktiSastri/bhaktiSastri";
import FoodForLife from "./Pages/FoodForLife/FoodForLife";
import BhaktiVriksha from "./Pages/OurProgram/BhaktiVriskha/BhaktiVriksha";
import YouthSeminar from "./Pages/OurProgram/YouthSeminar/YouthSeminar";
import GitaForYou from "./Pages/OurProgram/GitaForYou/GitaForYou";
import GopalaFunSchool from "./Pages/OurProgram/GopalaForSchool/GopalaFunSchool";
import Counselling from "./Pages/OurProgram/Counselling/Counselling";
import CorporateProgrammes from "./Pages/OurProgram/CorporateProgrammes/Program";
import PoliciesUsage from "./Components/Footer/PoliciesUsage"
import PolicyDetail from "./Components/Footer/PolicyDetail"
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KirtanBookingPage from "./Pages/samskara/bookAKirtan/KirtanBookingPage";
import BookYagna from "./Pages/samskara/BookYagna/BookYagna";
import Fastival from "./Components/Fastival/Fastival";
import FormPage from "./Components/Fastival/FormPage";
import Courses from "./Components/Courses/Courses";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/more-about-iskcon" element={<MoreAbout />} />
        <Route path="/nitya-seva" element={<NityaSeva />} />
        <Route path="/GauSeva" element={<GauSeva />} />

        <Route path="/Arti" element={<Arti />} />
        <Route path="/SaturdaySatsang" element={<SaturdaySatsang />} />
        <Route path="/SundayFeast" element={<SundayFeast />} />
        <Route path="/srilanka-ramayana-yatra" element={<SriLanka />} />
        <Route path="/LifeMembership" element={<LifeMembership />} />
        <Route path="/food-for-life" element={<FoodForLife />} />
        <Route path="/BhaktiSastri" element={<BhaktiSastri />} />
        <Route path="/BhaktiVriksha" element={<BhaktiVriksha />} />
        <Route path="/YouthSeminar" element={<YouthSeminar />} />
        <Route path="/GitaForYou" element={<GitaForYou />} />
        <Route path="/GopalaFunSchool" element={<GopalaFunSchool />} />
        <Route path="/Counselling" element={<Counselling />} />
        <Route path="/CorporateProgrammes" element={<CorporateProgrammes />} />
        <Route path="/policies-usage" element={<PoliciesUsage />} />
        <Route path="/policies-usage/:slug" element={<PolicyDetail />} />
        <Route path="/kirtan-booking" element={<KirtanBookingPage/>}/>
        <Route path="/yagna-booking" element={<BookYagna/>}/>
        <Route path="/festival" element={<Fastival />} />
        <Route path="/donation-form/:slug" element={<FormPage />} />
        <Route path="/courses" element={<Courses/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
