import { useEffect, useState } from 'react';
import MarketTrend from './component_2/MarketTrend';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLandingPage from './Signin_login/AuthLandingPage';
import LoginPage from './Signin_login/LoginPage';
import RegisterPage from './Signin_login/RegisterPage';
import AccountPage from './components/AccountPage';
import MarketChange from './components/Marketchages';
function App() {
  // Get login status from localStorage on initial load
  const [sign, setSign] = useState(() => {
    const stored = localStorage.getItem('isLoggedIn');
    return stored === 'true' ? false : true; // false means user is signed in
  });

  const [activepage, setactivepage] = useState("home");

  // Persist sign state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', !sign); // Store true if user is signed in
  }, [sign]);

  return (
    <>
      {!sign && (
        <>
          {activepage === "home" && (
            <>
              <Navbar setactivepage={setactivepage}  onLogout={() => {
    setSign(true);
    localStorage.removeItem('isLoggedIn');
  }}/>
              <HeroSection />
              <InfoCards />
              <AboutUs />
              <Footer />
            </>
          )}
          {activepage === "products" && (
            <>
              <MarketTrend setactivepage={setactivepage} />
            </>
          )}
          {activepage === "account" && (
            <>
              <AccountPage setactivepage={setactivepage}/>
            </>
          )}
          {activepage === "Trends" && (
            <>
              <MarketChange setactivepage={setactivepage}/>
            </>
          )}
          {activepage === "weather" && (
            <>
              <Weather se/>
            </>
          )}
        </>
      )}

      {sign && (
        <Router>
          <Routes>
            <Route path="/" element={<AuthLandingPage />} />
            <Route path="/login" element={<LoginPage check={setSign} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
