import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Lists from "./pages/Lists";
import LandingPageHeader from "./components/LandingPage/LandingPageHeader";
import VideoBanner from "./components/LandingPage/Videobanner";
import Brand from "./components/LandingPage/Brand";
import Features from "./components/LandingPage/Features";
import Content from "./components/LandingPage/Content";
import Projects from "./components/LandingPage/Projects";
import Category from "./components/LandingPage/Category";
import Portfolio from "./components/LandingPage/Portfolio";


function App() {
  return (
    <Router>
      <div className="App mobile:overflow-x-hidden">
        <Routes>
          {/* <Route path="/*" element={<Navigate to={"/home"} />} /> */}
          <Route
            path="/"
            element={
              <>
               <LandingPageHeader/>
            <VideoBanner />
            <Brand />
            <Features />
            <Content />
            <Projects />
            <Category />
            <Portfolio />
            <Footer />
              </>
            }
          />
<Route
            path="/Dashboard"
            element={
              <>
                <Header />
                <Home />
                <Dashboard/>
                <Footer />
              </>
            }
          />

          <Route
            path="/lists"
            element={
              <>
                <Header />
                <Home />
                <Lists />
                <Footer />
              </>
            }
          />

          <Route
            path="/Tasklists"
            element={
              <>
                <Header />
                <Home />

                <Footer />
              </>
            }
          />
          <Route
            path="/mypro"
            element={
              <>
                <Header />
                <Home />

                <Footer />
              </>
            }
          />
          <Route
            path="/inbox"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/feedback"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/freecredit"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/projectupdate"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
