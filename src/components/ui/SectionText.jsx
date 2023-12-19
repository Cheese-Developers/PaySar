import React from "react";
import { lottiePositions } from "../../helper/lottiePositions";
import LottieLove from "./LottieLove";
import love from "../../assets/love.json";

const SectionText = ({ children }) => {
  return (
    <div className="relative z-10">
      {children}
      {lottiePositions.map((position, index) => (
        <LottieLove key={index} animationData={love} position={position} />
      ))}
    </div>
  );
};

export default SectionText;
