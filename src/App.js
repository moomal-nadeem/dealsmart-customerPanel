import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// user
import Home from "./components/Main/Home/Home";
import AboutUs from "./components/Main/AboutUs/AboutUs";
import UnClaimable from "./components/Main/UnClaimable/UnClaimable";
import WhyUs from "./components/Main/WhyUs/WhyUs";
import P from "./components/Main/FillForm/P";
import Bills from "./components/Main/Bills/Bills";
import Watches from "./components/Main/Home/Watches";
import Cosmetics from "./components/Main/Home/Cosmetics";
import Hair from "./components/Main/Home/Hair";
import Kitchen from "./components/Main/Home/Kitchen";
import Mobile from "./components/Main/Home/Mobile";
import Car from "./components/Main/Home/Car";
import Electronics from "./components/Main/Home/Electronics";
import Other from "./components/Main/Home/Other";
import ClearBill from "./components/Main/Bill/ClearBill";
import MainPage from "./components/Main/MainPage/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/UnClaimable" element={<UnClaimable />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/P/:id" element={<P />} />
        <Route path="/Bills" element={<Bills />} />
        <Route path="/ClearBill" element={<ClearBill />} />
        <Route path="/Watches" element={<Watches />} />
        <Route path="/Cosmetics" element={<Cosmetics />} />
        <Route path="/Hair" element={<Hair />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Mobile" element={<Mobile />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Other" element={<Other />} />
   


    
       
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;
