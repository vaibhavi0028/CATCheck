// LandingPage.js
import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../essentials/carousel";
import StatsComponent from "../essentials/Stats";

export default function LandingPage() {
  const location = useLocation();

  return (
    <div>
      
      <Carousel />
      <StatsComponent />
    </div>
  );
}
