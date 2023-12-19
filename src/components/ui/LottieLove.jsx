import React from "react";
import Lottie from "lottie-react";

const LottieLove = ({ animationData, position }) => {
  return (
    <div className={`absolute z-[-1] w-40 h-40 ${position.direction}`}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieLove;
