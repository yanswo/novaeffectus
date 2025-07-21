import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IntroCards from "./components/IntroCards/IntroCards";
import Features from "./components/Features/Features";
import MainBanner from "./components/MainBanner/MainBanner";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <IntroCards />
        <Features />
        <MainBanner />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;
