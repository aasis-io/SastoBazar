import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import PageNotFound from "./pages/notFound/PageNotFound";
import AboutUs from "./pages/aboutUs/AboutUs";
import LearnMore from "./pages/learnMore/LearnMore";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Header title="SastoBazar Rewards"/> */}
        {/** Go to header file
         * pass props
         * clg(props)
         * access as object
         */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sastobazar-login" element={<Login />}></Route>
          <Route path="/sastobazar-register" element={<Register />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/more-info" element={<LearnMore />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
