import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../essentials/carousel";

export default function LandingPage() {
  const location = useLocation();

  return (
    <div>
        <Carousel />
    </div>
  );
}
