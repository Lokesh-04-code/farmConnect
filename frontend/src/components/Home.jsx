import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
export default function Home() {
  return (
    <>
            <HeroSection />
            <InfoCards />
            <AboutUs />
            <Footer />
    </>
  )
}
