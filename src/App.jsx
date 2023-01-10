import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";
import Intro from "./components/Intro";
// import Profile from "../src/assets/images/profile.jpg";
import Sidebar from "./components/Sidebar";
import Follower from "./pages/Follower";
import Following from "./pages/Following";
import { Context } from "./UI/Context/context";
import Headers from "./headers/headers"

// import Overview from "./pages/Overview"
function index() {
  const [apiValue, setApiValue] = useState(localStorage.getItem("key") || "kamolxon-web-dev");
  console.log(apiValue);
  const [falsy,setFalsy] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{ apiValue: apiValue, setApiValue: setApiValue,falsy,setFalsy }}
        > 
          <Headers />
          <Navbar />
          <Intro />
          <main>
            <Sidebar />

            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/repositories" element={<Repositories />} />
              <Route path="/follower" element={<Follower />} />
              <Route path="/following" element={<Following />} />
            </Routes>
          </main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default index;
