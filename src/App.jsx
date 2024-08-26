import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BannerPage from "./pages/Banner/BannerPage";
import TopHeader from "./components/topHeader/TopHeader";

function App() {
  return (
    <>
      <Header />
      <TopHeader />
      <BannerPage />
      <Footer />
    </>
  );
}

export default App;
